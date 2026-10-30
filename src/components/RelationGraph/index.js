import React, {useCallback, useEffect, useId, useLayoutEffect, useRef, useState} from 'react';

// useLayoutEffect does nothing while rendering on the server; the measuring pass belongs
// to the browser, where it runs before paint.
const useMeasureEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
import styles from './styles.module.css';
import {KINDS, KindIcon, accentFor, displayName, inferKind} from '@site/src/components/PowerSpec';

/**
 * RelationGraph — the Power Editor's Relations view, as a docs figure.
 *
 * The Relations window (Power.Editor.PowerRelationGraphView) lays its nodes out
 * in columns: a node sits one column right of whatever reached it, stacked under
 * whatever is already in that column. This does the same, so a graph here reads
 * like the one in the editor — only trimmed, by hand, to the nodes that carry the
 * mechanic.
 *
 *   <RelationGraph nodes={[…]} edges={[…]}>caption</RelationGraph>
 *
 * A node is {id, kind, name, subtitle, root, col, href, title}: `kind` is a
 * PowerSpec kind (stat, effect, pack, key, injector, processor, …) and picks the
 * icon and colour, `root` draws the teal root frame the editor uses, and `col`
 * overrides the computed column when a hand-placed one reads better.
 *
 * An edge is {from, to, kind, label}, with the editor's six link kinds as `kind`:
 * relation, holds, target, read, condition, reference. `rank: false` draws the edge
 * without letting it push its target a column right — for a link that reads back the
 * way the editor's reverse ports do.
 */

// The port colours of PowerRelationGraphView.ColorOf(RelationLinkKind), as hex.
const LINKS = {
  relation: {color: '#59a6ff', label: 'Relative stat'},
  holds: {color: '#a9a9a9', label: 'Holds'},
  target: {color: '#ff804d', label: 'Targets'},
  read: {color: '#73d980', label: 'Reads'},
  condition: {color: '#bf80ff', label: 'Condition'},
  reference: {color: '#f2cc59', label: 'References'},
};

const NODE_W = 158;
// A name too long for two lines gets a node half again as wide instead of stacking
// into a narrow column of syllables; its whole column widens with it.
const WIDE_W = Math.round(NODE_W * 1.5);
const WIDE_AT = 26;
const GUTTER = 50;
const ROW_GAP = 16;
const LINE_H = 15;
const SUBTITLE_H = 16;
// Roughly what fits on one line of a name, at its font size inside NODE_W. Only the
// first layout uses it: once the nodes are on the page their real heights are measured.
const NAME_CHARS = 16;
const LONG_NAME = 22;

const nameOf = (node) => String(node.label ?? displayName(node.name) ?? '');

const isWide = (node) => nameOf(node).length > WIDE_AT;

/** A first guess at the node's height, from its name wrapped at NAME_CHARS. */
function estimate(node) {
  const perLine = isWide(node) ? NAME_CHARS * 1.5 : NAME_CHARS;
  const lines = Math.max(1, Math.ceil(nameOf(node).length / perLine));
  return 22 + lines * LINE_H + (node.subtitle ? SUBTITLE_H : 0);
}

/**
 * The column of every node: one more than the deepest node reaching it, roots and
 * unreached nodes at 0, an explicit `col` kept as given. Relaxed at most as many
 * times as there are nodes, so a cycle settles instead of looping.
 */
function columns(nodes, edges) {
  const col = new Map(nodes.map((n) => [n.id, n.col ?? 0]));
  const fixed = new Set(nodes.filter((n) => n.col !== undefined).map((n) => n.id));
  for (let pass = 0; pass < nodes.length; pass++) {
    let moved = false;
    for (const edge of edges) {
      if (edge.rank === false) continue;
      if (fixed.has(edge.to) || !col.has(edge.from) || !col.has(edge.to)) continue;
      const wanted = col.get(edge.from) + 1;
      if (wanted > col.get(edge.to)) {
        col.set(edge.to, wanted);
        moved = true;
      }
    }
    if (!moved) break;
  }
  return col;
}

/**
 * Where each node goes. Columns are filled left to right: a node starts at its
 * parents' average height and is pushed down to clear the column, as the editor's
 * Place / ResolveOverlaps pair does.
 */
function layout(nodes, edges, measured = {}) {
  const heightOf = (node) => measured[node.id] ?? estimate(node);
  const col = columns(nodes, edges);
  const index = new Map(nodes.map((n, i) => [n.id, i]));
  const parents = new Map(nodes.map((n) => [n.id, []]));
  for (const edge of edges) {
    if (parents.has(edge.to) && col.get(edge.from) < col.get(edge.to)) parents.get(edge.to).push(edge.from);
  }

  const placed = new Map();
  const bottoms = new Map();
  const byColumn = [...new Set([...col.values()])].sort((a, b) => a - b);

  // Each column is as wide as the widest node in it, and sits a gutter right of the last.
  const widths = new Map();
  const lefts = new Map();
  let x = 0;
  for (const column of byColumn) {
    const wide = nodes.some((n) => col.get(n.id) === column && isWide(n));
    widths.set(column, wide ? WIDE_W : NODE_W);
    lefts.set(column, x);
    x += widths.get(column) + GUTTER;
  }

  for (const column of byColumn) {
    const inColumn = nodes
      .filter((n) => col.get(n.id) === column)
      .map((n) => {
        const ys = parents.get(n.id).map((id) => placed.get(id)).filter(Boolean).map((p) => p.y);
        return {node: n, anchor: ys.length ? ys.reduce((a, b) => a + b, 0) / ys.length : null};
      })
      .sort((a, b) => (a.anchor ?? Infinity) - (b.anchor ?? Infinity) || index.get(a.node.id) - index.get(b.node.id));

    for (const {node, anchor} of inColumn) {
      const y = Math.max(anchor ?? 0, bottoms.get(column) ?? 0);
      placed.set(node.id, {x: lefts.get(column), y, w: widths.get(column), h: heightOf(node)});
      bottoms.set(column, y + heightOf(node) + ROW_GAP);
    }
  }

  const top = Math.min(...[...placed.values()].map((p) => p.y));
  for (const position of placed.values()) position.y -= top;

  return {
    placed,
    width: Math.max(...[...placed.values()].map((p) => p.x + p.w)),
    height: Math.max(...[...placed.values()].map((p) => p.y + p.h)),
  };
}

/**
 * The curve of an edge, and the midpoint to hang its label on. A forward edge leaves
 * the source's right side for the target's left; one running back leaves the left
 * side, passes under every node and comes back into the target's right side, so it
 * crosses nothing on the way.
 */
function geometry(from, to, floor) {
  const back = to.x < from.x;
  const y1 = from.y + from.h / 2;
  const y2 = to.y + to.h / 2;
  // A cubic with both handles at `under` bottoms out at 0.75·under + (y1 + y2)/8 — put
  // that just below the last row, so the underpass clears every node.
  const under = (floor + 16 - (y1 + y2) / 8) / 0.75;
  const x1 = back ? from.x : from.x + from.w;
  const x2 = back ? to.x + to.w : to.x;
  const bow = Math.max(36, Math.min(110, Math.abs(x2 - x1) / 2));
  const c1 = back ? [x1 - 40, under] : [x1 + bow, y1];
  const c2 = back ? [x2 + 40, under] : [x2 - bow, y2];
  return {
    d: `M ${x1} ${y1} C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${x2} ${y2}`,
    // The curve at t = 0.5, from the cubic itself; a forward label sits just above the line.
    label: {
      x: (x1 + 3 * c1[0] + 3 * c2[0] + x2) / 8,
      y: (y1 + 3 * c1[1] + 3 * c2[1] + y2) / 8 - (back ? -3 : 6),
    },
  };
}

/** A name with break opportunities at `_` and at each capitalised word, so it never wraps mid-word. */
function breakable(text) {
  const parts = String(text).split(/(?<=_)|(?=[A-Z][a-z])/).filter(Boolean);
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i < parts.length - 1 && <wbr />}
    </React.Fragment>
  ));
}

function Node({node}) {
  const kind = node.kind ?? inferKind(node.name) ?? 'other';
  const meta = KINDS[kind];
  const label = node.label ?? displayName(node.name);
  const body = (
    <>
      <span className={styles.nodeIcon}>
        {meta ? <KindIcon kind={kind} className={styles.nodeIconImg} /> : <span className={styles.nodeDot} />}
      </span>
      <span className={styles.nodeText}>
        <span className={`${styles.nodeName} ${String(label).length > LONG_NAME ? styles.longName : ''}`}>
          {breakable(label)}
        </span>
        {node.subtitle && <span className={styles.nodeSubtitle}>{node.subtitle}</span>}
      </span>
    </>
  );
  const className = `${styles.node} ${node.root ? styles.rootNode : ''}`;
  const style = {'--rg-color': accentFor(meta?.color) ?? 'var(--ifm-color-emphasis-500)'};
  const title = node.title ?? (node.name !== label ? node.name : undefined);
  return node.href ? (
    <a className={className} style={style} href={node.href} title={title}>
      {body}
    </a>
  ) : (
    <div className={className} style={style} title={title}>
      {body}
    </div>
  );
}

export default function RelationGraph({nodes = [], edges = [], legend = true, children}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  // Node heights come from the text once it is on the page: a name that wraps to four
  // lines gets a node four lines tall, instead of overflowing an estimated box.
  const [measured, setMeasured] = useState({});
  const slots = useRef({});
  const hold = useCallback((id) => (el) => {
    slots.current[id] = el;
  }, []);

  useMeasureEffect(() => {
    const seen = {};
    let changed = false;
    for (const node of nodes) {
      const el = slots.current[node.id];
      if (!el) continue;
      const h = Math.ceil(el.getBoundingClientRect().height);
      if (!h) continue;
      seen[node.id] = h;
      if (Math.abs((measured[node.id] ?? 0) - h) > 0.5) changed = true;
    }
    if (changed) setMeasured(seen);
  });

  if (nodes.length === 0) return null;

  const {placed, width, height: nodeHeight} = layout(nodes, edges, measured);
  const drawn = edges.filter((e) => placed.has(e.from) && placed.has(e.to));
  // A back edge passes under the nodes — leave room for it, the canvas clips.
  const dips = drawn.some((e) => placed.get(e.to).x < placed.get(e.from).x);
  const height = nodeHeight + (dips ? 34 : 0);
  const usedKinds = [...new Set(drawn.map((e) => e.kind ?? 'reference'))].filter((k) => LINKS[k]);

  return (
    <figure className={styles.figure}>
      <div className={styles.scroll}>
        <div className={styles.canvas} style={{width, height}}>
          <svg className={styles.edges} width={width} height={height} aria-hidden="true">
            <defs>
              {Object.entries(LINKS).map(([kind, meta]) => (
                <marker
                  key={kind}
                  id={`rg-${uid}-${kind}`}
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse">
                  <path d="M 0 0 L 8 4 L 0 8 z" fill={meta.color} />
                </marker>
              ))}
            </defs>
            {drawn.map((edge, i) => {
              const kind = LINKS[edge.kind] ? edge.kind : 'reference';
              const from = placed.get(edge.from);
              const to = placed.get(edge.to);
              return (
                <path
                  key={i}
                  d={geometry(from, to, nodeHeight).d}
                  className={styles.edge}
                  stroke={LINKS[kind].color}
                  markerEnd={`url(#rg-${uid}-${kind})`}
                />
              );
            })}
            {drawn.map((edge, i) => {
              if (!edge.label) return null;
              const {label} = geometry(placed.get(edge.from), placed.get(edge.to), nodeHeight);
              return (
                <text
                  key={`l${i}`}
                  className={styles.edgeLabel}
                  x={label.x}
                  y={label.y}
                  textAnchor="middle">
                  {edge.label}
                </text>
              );
            })}
          </svg>
          {nodes.map((node) => {
            const position = placed.get(node.id);
            return (
              <div
                key={node.id}
                ref={hold(node.id)}
                className={styles.nodeSlot}
                style={{left: position.x, top: position.y, width: position.w}}>
                <Node node={node} />
              </div>
            );
          })}
        </div>
      </div>
      {legend && usedKinds.length > 0 && (
        <div className={styles.legend}>
          {usedKinds.map((kind) => (
            <span key={kind} className={styles.legendItem}>
              <span className={styles.legendLine} style={{background: LINKS[kind].color}} />
              {LINKS[kind].label}
            </span>
          ))}
        </div>
      )}
      {children && <figcaption className={styles.caption}>{children}</figcaption>}
    </figure>
  );
}

export {RelationGraph};

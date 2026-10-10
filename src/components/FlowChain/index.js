import React from 'react';
import styles from './styles.module.css';
import EffectIcon from '../PowerSpec/assets/EffectIcon.png';
import EffectPackIcon from '../PowerSpec/assets/EffectPackIcon.png';
import ProcessorIcon from '../PowerSpec/assets/ProcessorIcon.png';
import StatIcon from '../PowerSpec/assets/StatDefinitionIcon.png';
import StatKeyIcon from '../PowerSpec/assets/StatKeyIcon.png';
import ContainerIcon from '../PowerSpec/assets/StatContainerIcon.png';
import EnvironmentIcon from '../PowerSpec/assets/StatEnvironmentDefIcon.png';
import RepositoryIcon from '../PowerSpec/assets/StatRepositoryIcon.png';
import InjectorIcon from '../PowerSpec/assets/InjectorIcon.png';

const ICONS = {
  effect: {icon: EffectIcon, color: '#EA635F'},
  pack: {icon: EffectPackIcon, color: '#EE9C4E'},
  processor: {icon: ProcessorIcon, color: '#5898E9'},
  stat: {icon: StatIcon, color: '#F3DC60'},
  key: {icon: StatKeyIcon, color: '#EC61CA'},
  container: {icon: ContainerIcon, color: '#5DD275'},
  environment: {icon: EnvironmentIcon, color: '#B58962'},
  repository: {icon: RepositoryIcon, color: '#8a94a3'},
  injector: {icon: InjectorIcon, color: '#70B04D'},
};

function Head({icon, label, sub}) {
  const meta = icon ? ICONS[icon] : null;
  return (
    <>
      {meta && <img src={meta.icon} alt="" className={styles.nodeIcon} />}
      <span className={styles.nodeText}>
        <span className={styles.nodeLabel}>{label}</span>
        {sub && <span className={styles.nodeSub}>{sub}</span>}
      </span>
    </>
  );
}

function colorVar(icon, color) {
  if (color) return {'--c': color};
  const meta = icon ? ICONS[icon] : null;
  return meta ? {'--c': meta.color} : undefined;
}

/** A node, or — when it has `children` — a container box holding child nodes. */
function Item({icon, label, sub, color, children}) {
  if (Array.isArray(children) && children.length > 0) {
    return (
      <div className={styles.container} style={colorVar(icon, color)}>
        <div className={styles.containerHead}>
          <Head icon={icon} label={label} sub={sub} />
        </div>
        <div className={styles.containerBody}>
          {children.map((c, i) => (
            <div
              key={i}
              className={styles.node}
              style={colorVar(c.icon, c.color)}>
              <Head {...c} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.node} style={colorVar(icon, color)}>
      <Head icon={icon} label={label} sub={sub} />
    </div>
  );
}

/**
 * A chain of columns joined by arrows. Each column is one node object, or an
 * array of node objects (a stack / fan). A node object with a `children` array
 * renders as a container box holding those child nodes.
 *
 *   <FlowChain vertical columns={[
 *     {icon: 'processor', label: 'Reflect Process'},
 *     {icon: 'stat', label: 'PhysicalAttackReflector', children: [
 *       {icon: 'stat', label: 'HealthSteal', sub: 'Order 1'},
 *       {icon: 'stat', label: 'DamageReflect', sub: 'Order 2'},
 *     ]},
 *   ]} />
 */
export default function FlowChain({columns = [], vertical = false}) {
  return (
    <div className={`${styles.chain} ${vertical ? styles.vertical : ''}`}>
      {columns.map((col, i) => {
        const items = Array.isArray(col) ? col : [col];
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <span className={styles.arrow} aria-hidden="true">
                {vertical ? '↓' : '→'}
              </span>
            )}
            <div className={styles.col}>
              {items.map((n, j) => (
                <Item key={j} {...n} />
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

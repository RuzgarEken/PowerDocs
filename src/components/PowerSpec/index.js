import React, {createContext, useContext} from 'react';
import styles from './styles.module.css';
import EffectIcon from './assets/EffectIcon.png';
import EffectPackIcon from './assets/EffectPackIcon.png';
import InjectorIcon from './assets/InjectorIcon.png';
// No StatIcon.png in ./assets — using the "Stat Definition" asset icon for the `stat` kind.
import StatIcon from './assets/StatDefinitionIcon.png';
import StatRepositoryIcon from './assets/StatRepositoryIcon.png';
import StatKeyIcon from './assets/StatKeyIcon.png';
import StatContainerIcon from './assets/StatContainerIcon.png';
import StatEnvironmentDefIcon from './assets/StatEnvironmentDefIcon.png';
import ProcessorIcon from './assets/ProcessorIcon.png';

/**
 * PowerSpec — presentational "spec card" components for the docs.
 *
 * Framed card + icon badge. The title reads "<Kind>: <name>". Rows and tags can
 * carry a small inline icon (icon="stat" | "effect" | …) so a value that points
 * at another Power asset shows that asset's icon next to it.
 *
 *   <SpecCard kind="stat|injector|pack|effect|repository" label name>…</SpecCard>
 *   <SpecRow label="Target Stat" icon="stat">Health</SpecRow>
 *   <SpecTags icon="stat" items={['A', {key: 'B', value: 1}]} />
 *
 *   <EffectExample  targetStat attributeStat(s) value … />
 *   <StatExample    name statKey type min max default relations injectors condition />
 *   <InjectorExample name into condition value effect order />
 *   <PackExample     name label target>…nested cards…</PackExample>
 */

const NestedContext = createContext(false);

// `color` values mirror the Power asset icons used inside Unity.
// TODO(tarik): confirm hex values for the icon-derived kinds below.
const KINDS = {
  effect: {label: 'Effect', color: '#C83737', icon: EffectIcon},
  stat: {label: 'Stat', color: '#FFDC32', icon: StatIcon},
  injector: {label: 'Injector', color: '#B8B176', icon: InjectorIcon},
  pack: {label: 'Effect Pack', color: '#c17a3c', icon: EffectPackIcon},
  repository: {label: 'Stat Repository', color: '#ffffff', icon: StatRepositoryIcon},
  key: {label: 'Stat Key', color: '#b4359e', icon: StatKeyIcon},
  container: {label: 'Stat Container', color: '#37b98c', icon: StatContainerIcon},
  environment: {label: 'Environment', color: '#d2b48c', icon: StatEnvironmentDefIcon},
  processor: {label: 'Processor', color: '#3e8cb5', icon: ProcessorIcon},
};

// Very light kind colours (e.g. Repository's white) are unreadable as a border
// or text colour on the light theme — fall back to a neutral for those roles.
function accentFor(color) {
  const m = /^#?([0-9a-fA-F]{6})$/.exec((color || '').trim());
  if (m) {
    const n = parseInt(m[1], 16);
    if ((n >> 16) > 235 && ((n >> 8) & 255) > 235 && (n & 255) > 235) {
      return '#8a94a3';
    }
  }
  return color;
}

function KindIcon({kind, className}) {
  const icon = KINDS[kind]?.icon;
  if (!icon) return null;
  return <img src={icon} alt="" className={className} />;
}

// Leading `Type_` segments — longest / most specific first.
const TYPE_PREFIXES = [
  ['StatInjectorDefinition_', 'injector'],
  ['StatInjector_', 'injector'],
  ['LinkerDefinition_', 'injector'],
  ['Linker_', 'injector'],
  ['EffectPack_', 'pack'],
  ['Pack_', 'pack'],
  ['Repository_', 'repository'],
  ['Environment_', 'environment'],
  ['Container_', 'container'],
  ['Effect_', 'effect'],
  ['Stat_', 'stat'],
  ['Key_', 'key'],
];

// Guess the asset kind from a `Type_Name` identifier.
function inferKind(name) {
  if (typeof name !== 'string') return undefined;
  for (const [prefix, kind] of TYPE_PREFIXES) {
    if (name.startsWith(prefix)) return kind;
  }
  if (/Injector/.test(name)) return 'injector';
  return undefined;
}

// Drop the redundant `Type_` prefix — the icon already says what it is.
function displayName(name) {
  if (typeof name !== 'string') return name;
  for (const [prefix] of TYPE_PREFIXES) {
    if (name.startsWith(prefix)) return name.slice(prefix.length);
  }
  return name;
}

/**
 * Inline reference to a Power asset, with its icon. The redundant `Type_`
 * prefix is dropped from the label (pass `full` to keep it).
 *
 *   <PowerRef>Key_HealthCounterEffectsTaken</PowerRef>  → 🔑 HealthCounterEffectsTaken
 *   <PowerRef kind="stat">Health</PowerRef>             → explicit kind
 *   <PowerRef full>Effect_AttackDamage_STS</PowerRef>   → keep the full name
 */
export function PowerRef({kind, full, children}) {
  const resolved = kind ?? inferKind(children);
  const text = full ? children : displayName(children);
  return (
    <span
      className={styles.ref}
      title={typeof children === 'string' ? children : undefined}>
      {resolved && <KindIcon kind={resolved} className={styles.refIcon} />}
      <code>{text}</code>
    </span>
  );
}

export function SpecCard({kind = 'effect', label, name, children}) {
  const nested = useContext(NestedContext);
  const meta = KINDS[kind] ?? KINDS.effect;
  return (
    <div
      className={`${styles.card} ${nested ? styles.nested : ''}`}
      style={{'--spec-color': accentFor(meta.color)}}
      data-kind={kind}>
      <div className={styles.iconBadge}>
        {meta.icon ? (
          <img src={meta.icon} alt="" className={styles.icon} />
        ) : (
          <span className={styles.iconDot} />
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.title}>
          <span className={styles.titleKind}>{label ?? meta.label}</span>
          {name && (
            <>
              <span className={styles.titleSep}>: </span>
              <code className={styles.titleName}>{name}</code>
            </>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export function SpecRow({label, icon, children}) {
  if (children === undefined || children === null || children === '') return null;
  const primitive =
    typeof children === 'string' || typeof children === 'number';
  return (
    <div className={styles.row}>
      <span className={styles.key}>{label}:</span>
      <span className={styles.val}>
        {icon && <KindIcon kind={icon} className={styles.rowIcon} />}
        {primitive ? (
          <code className={styles.valText}>{children}</code>
        ) : (
          children
        )}
      </span>
    </div>
  );
}

export function SpecTags({items, icon}) {
  if (!items || items.length === 0) return null;
  return (
    <span className={styles.tagGroup}>
      {items.map((it, i) => {
        const text =
          it && typeof it === 'object'
            ? `${it.key}${it.value !== undefined ? ` = ${it.value}` : ''}`
            : it;
        return (
          <code key={i} className={styles.tag}>
            {icon && <KindIcon kind={icon} className={styles.tagIcon} />}
            {text}
          </code>
        );
      })}
    </span>
  );
}

export function EffectExample({
  targetStat,
  attributeStat,
  attributeStats,
  value,
  valueStat,
  label,
  name,
  target,
  processor,
  applyType,
  modifierType,
  duration,
}) {
  const attrs = attributeStats ?? (attributeStat ? [attributeStat] : null);
  return (
    <SpecCard kind="effect" label={label} name={name}>
      <SpecRow label="Target Stat" icon="key">
        {targetStat}
      </SpecRow>
      {attrs && attrs.length > 0 && (
        <SpecRow label={attrs.length > 1 ? 'Attribute Stats' : 'Attribute Stat'}>
          <SpecTags icon="key" items={attrs} />
        </SpecRow>
      )}
      {target !== undefined && <SpecRow label="Target">{target}</SpecRow>}
      {(value !== undefined || valueStat !== undefined) && (
        <SpecRow
          label="Value"
          icon={valueStat !== undefined ? 'key' : undefined}>
          {valueStat !== undefined ? (
            <>
              <code>{displayName(valueStat)}</code>
              {value !== undefined && ` (${value})`}
            </>
          ) : (
            value
          )}
        </SpecRow>
      )}
      {processor !== undefined && (
        <SpecRow label="Processor" icon="processor">
          {processor}
        </SpecRow>
      )}
      {applyType !== undefined && (
        <SpecRow label="Apply Type">{applyType}</SpecRow>
      )}
      {modifierType !== undefined && (
        <SpecRow label="Modifier Type">{modifierType}</SpecRow>
      )}
      {duration !== undefined && <SpecRow label="Duration">{duration}</SpecRow>}
    </SpecCard>
  );
}

export function StatExample({
  name,
  statKey,
  type,
  min,
  max,
  default: defaultValue,
  relations,
  injectors,
  condition,
  children,
}) {
  const hasRange = min !== undefined || max !== undefined;
  return (
    <SpecCard kind="stat" name={name}>
      <SpecRow label="Stat Key" icon="key">
        {statKey}
      </SpecRow>
      {type !== undefined && <SpecRow label="Type">{type}</SpecRow>}
      {hasRange && (
        <SpecRow label="Range">{`${min ?? '−∞'} → ${max ?? '∞'}`}</SpecRow>
      )}
      {defaultValue !== undefined && (
        <SpecRow label="Default">{defaultValue}</SpecRow>
      )}
      {relations && relations.length > 0 && (
        <div className={styles.group}>
          <div className={styles.groupLabel}>Relative Stats</div>
          {relations.map((r, i) =>
            r && typeof r === 'object' ? (
              <SpecRow key={i} label={r.key} icon="key">
                {r.value}
              </SpecRow>
            ) : (
              <SpecRow key={i} label="Relation" icon="key">
                {r}
              </SpecRow>
            ),
          )}
        </div>
      )}
      {injectors && injectors.length > 0 && (
        <SpecRow label="Injectors">
          <SpecTags icon="injector" items={injectors} />
        </SpecRow>
      )}
      {condition !== undefined && (
        <SpecRow label="Condition">{condition}</SpecRow>
      )}
      {children && <div className={styles.note}>{children}</div>}
    </SpecCard>
  );
}

export function InjectorExample({
  name,
  into,
  condition,
  value,
  effect,
  order,
  children,
}) {
  return (
    <SpecCard kind="injector" name={name}>
      <SpecRow label="Injects Into" icon="key">
        {into}
      </SpecRow>
      {condition !== undefined && (
        <SpecRow label="Condition">{condition}</SpecRow>
      )}
      {value !== undefined && <SpecRow label="Injected Value">{value}</SpecRow>}
      {effect !== undefined && (
        <SpecRow label="Injected Effect" icon="effect">
          {effect}
        </SpecRow>
      )}
      {order !== undefined && <SpecRow label="Order">{order}</SpecRow>}
      {children && <div className={styles.note}>{children}</div>}
    </SpecCard>
  );
}

export function ProcessorExample({name, relativeKey, children}) {
  const keys = Array.isArray(relativeKey)
    ? relativeKey
    : relativeKey != null
      ? [relativeKey]
      : [];
  return (
    <SpecCard kind="processor" name={name}>
      {keys.map((k, i) => (
        <SpecRow key={i} label="Relative Key" icon="key">
          {k}
        </SpecRow>
      ))}
      {children && <div className={styles.note}>{children}</div>}
    </SpecCard>
  );
}

export function PackExample({name, label = 'Effect Pack', target, children}) {
  return (
    <SpecCard kind="pack" label={label} name={name}>
      {target !== undefined && <SpecRow label="Target">{target}</SpecRow>}
      <div className={styles.packContents}>
        <NestedContext.Provider value>{children}</NestedContext.Provider>
      </div>
    </SpecCard>
  );
}

/**
 * A Stat Repository shown as a list of the Stat Definitions it holds.
 *
 *   <RepositoryExample name="Repository_Card_X_STS" stats={[
 *     {key: 'Damage', value: 12},
 *     {key: 'Energy Cost', value: 0},
 *     {key: 'Card Type', value: 'Attack'},
 *   ]} />
 *
 * Each entry defaults to the `stat` icon; pass `icon` on an entry to override.
 */
export function RepositoryExample({name, label, stats, children}) {
  return (
    <SpecCard kind="repository" label={label} name={name}>
      {stats && stats.length > 0 && (
        <ul className={styles.list}>
          {stats.map((s, i) => (
            <li key={i} className={styles.listItem}>
              <KindIcon kind={s.icon || 'stat'} className={styles.listIcon} />
              <span className={styles.listName}>{s.key ?? s.name}</span>
              {s.value !== undefined && s.value !== null && s.value !== '' && (
                <>
                  <span className={styles.listSep}>—</span>
                  <code className={styles.listVal}>{s.value}</code>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      {children}
    </SpecCard>
  );
}

export default EffectExample;

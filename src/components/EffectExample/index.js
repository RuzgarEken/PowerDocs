import React from 'react';
import styles from './styles.module.css';
import EffectIcon from './assets/EffectIcon.png';

/**
 * Renders a Power Effect example as a framed spec card with an icon badge,
 * instead of a plain ```text code block.
 *
 * Usage in MDX:
 *
 * <EffectExample
 *   targetStat="Health"
 *   attributeStats={['MagicAttack', 'LightningAttack', 'OrbAttack']}
 *   value={-100}
 * />
 *
 * `attributeStat` (singular) also works for the single-attribute case,
 * and either prop can be omitted entirely for a BaseStatEffect.
 */
export default function EffectExample({
  targetStat,
  attributeStat,
  attributeStats,
  value,
  label,
}) {
  const attrs = attributeStats ?? (attributeStat ? [attributeStat] : null);

  return (
    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <img src={EffectIcon} alt="" className={styles.icon} />
      </div>

      <div className={styles.cardBody}>
        {label && <div className={styles.cardLabel}>{label}</div>}

        <div className={styles.row}>
          <span className={styles.key}>Target Stat</span>
          <code className={styles.val}>{targetStat}</code>
        </div>

        {attrs && attrs.length > 0 && (
          <div className={styles.row}>
            <span className={styles.key}>
              {attrs.length > 1 ? 'Attribute Stats' : 'Attribute Stat'}
            </span>
            <span className={styles.tagGroup}>
              {attrs.map((a) => (
                <code key={a} className={styles.tag}>
                  {a}
                </code>
              ))}
            </span>
          </div>
        )}

        {value !== undefined && (
          <div className={styles.row}>
            <span className={styles.key}>Value</span>
            <code className={styles.val}>{value}</code>
          </div>
        )}
      </div>
    </div>
  );
}
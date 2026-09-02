import React from 'react';
import styles from './styles.module.css';

/**
 * Stacks its children vertically with a centered arrow between each.
 * Put whatever you like inside — <EffectExample>, <SpecCard>, plain text.
 *
 *   <Flow>
 *     <EffectExample targetStat="Attack" value={5} />
 *     <SpecCard kind="processor" name="BSModifier">…</SpecCard>
 *     <SpecCard kind="stat" name="Attack">…</SpecCard>
 *   </Flow>
 *
 * `labels` (optional) is an array of arrow captions, one per gap.
 */
export default function Flow({children, labels = []}) {
  const items = React.Children.toArray(children).filter(React.isValidElement);
  return (
    <div className={styles.flow}>
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div className={styles.arrow}>
              <span className={styles.glyph} aria-hidden="true">
                ↓
              </span>
              {labels[i - 1] && (
                <span className={styles.label}>{labels[i - 1]}</span>
              )}
            </div>
          )}
          <div className={styles.item}>{child}</div>
        </React.Fragment>
      ))}
    </div>
  );
}

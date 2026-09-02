import React from 'react';
import styles from './styles.module.css';
import StatIcon from '../PowerSpec/assets/StatDefinitionIcon.png';
import EffectIcon from '../PowerSpec/assets/EffectIcon.png';
import ProcessorIcon from '../PowerSpec/assets/ProcessorIcon.png';

function Node({icon, label, color, className}) {
  return (
    <div
      className={`${styles.node} ${className || ''}`}
      style={color ? {'--node-color': color} : undefined}>
      {icon && <img src={icon} alt="" className={styles.nodeIcon} />}
      <span className={styles.nodeLabel}>{label}</span>
    </div>
  );
}

function Arrow({label}) {
  return (
    <div className={styles.arrow}>
      <span className={styles.arrowLabel}>{label}</span>
      <span className={styles.arrowGlyph} aria-hidden="true">
        &rarr;
      </span>
    </div>
  );
}

/**
 * The Power runtime flow, for the "What is Power" page.
 * Effector → Effect → Processor → the Stats held inside an Actor.
 */
export default function PowerFlow() {
  return (
    <div className={styles.flow}>
      <Node label="Effector" />
      <Arrow label="applies" />
      <Node icon={EffectIcon} label="Effect" color="#c83737" />
      <Arrow label="through" />
      <Node icon={ProcessorIcon} label="Processors" color="#3e8cb5" />
      <Arrow label="modifies" />
      <div className={styles.actor}>
        <div className={styles.actorHeader}>Actor</div>
        <Node icon={StatIcon} label="Stats" color="#e0c400" />
      </div>
    </div>
  );
}

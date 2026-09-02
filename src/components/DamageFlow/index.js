import React from 'react';
import styles from './styles.module.css';
import {PackExample, EffectExample} from '../PowerSpec';
import ProcessorIcon from '../PowerSpec/assets/ProcessorIcon.png';
import StatIcon from '../PowerSpec/assets/StatDefinitionIcon.png';

function Node({icon, label, sub, color}) {
  return (
    <div className={styles.node} style={color ? {'--c': color} : undefined}>
      {icon && <img src={icon} alt="" className={styles.nodeIcon} />}
      <span className={styles.nodeText}>
        <span className={styles.nodeLabel}>{label}</span>
        {sub && <span className={styles.nodeSub}>{sub}</span>}
      </span>
    </div>
  );
}

function Down({label}) {
  return (
    <div className={styles.down}>
      <span className={styles.downGlyph} aria-hidden="true">
        ↓
      </span>
      {label}
    </div>
  );
}

/**
 * The "decrease Health by 5" walkthrough for the Getting Started page.
 * OnCollideEffector delivers Pack_Damage (which holds the FloatEffect) →
 * Processor_Add_Float → HealthStat 100 → 95.
 */
export default function DamageFlow() {
  return (
    <div className={styles.flow}>
      <Node label="OnCollideEffector" sub="Effector" />
      <Down label="delivers" />

      <div className={styles.packWrap}>
        <PackExample name="Pack_Damage">
          <EffectExample name="FloatEffect" targetStat="Health" value={-5} />
        </PackExample>
      </div>

      <Down label="through" />
      <Node
        icon={ProcessorIcon}
        label="Processor_Add_Float"
        sub="ProcessorId: Add_Float"
        color="#3e8cb5"
      />

      <Down label="modifies" />
      <Node
        icon={StatIcon}
        label="HealthStat"
        sub="Health: 100 → 95"
        color="#e0c400"
      />
    </div>
  );
}

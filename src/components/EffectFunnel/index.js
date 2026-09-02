import React from 'react';
import styles from './styles.module.css';
import EffectIcon from '../PowerSpec/assets/EffectIcon.png';
import ProcessorIcon from '../PowerSpec/assets/ProcessorIcon.png';
import StatIcon from '../PowerSpec/assets/StatDefinitionIcon.png';

const STAGES = [
  'PreProcess',
  'Process',
  'PostProcess',
  'DurationProcess',
  'FeedbackProcess',
];

function Node({icon, label, sub, color}) {
  return (
    <div
      className={styles.node}
      style={color ? {'--node-color': color} : undefined}>
      {icon && <img src={icon} alt="" className={styles.nodeIcon} />}
      <span className={styles.nodeMain}>
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
        &darr;
      </span>
      {label && <span>{label}</span>}
    </div>
  );
}

/**
 * The Effect processing funnel, for the "Effect Process Flow" page.
 * Effect (BS / AS / MAS) → funnel stages → modifies a Stat's value.
 */
export default function EffectFunnel() {
  return (
    <div className={styles.wrap}>
      <Node
        icon={EffectIcon}
        label="Effect"
        sub="BS · AS · MAS"
        color="#c83737"
      />
      <Down label="enters" />

      <div className={styles.funnel}>
        <div className={styles.funnelHeader}>Processing Funnel</div>
        <div className={styles.stages}>
          {STAGES.map((s, i) => (
            <React.Fragment key={s}>
              {i > 0 && (
                <span className={styles.stageArrow} aria-hidden="true">
                  &darr;
                </span>
              )}
              <span className={styles.stage}>
                <img
                  src={ProcessorIcon}
                  alt=""
                  className={styles.stageIcon}
                />
                {s}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <Down label="modifies" />
      <Node icon={StatIcon} label="Stat" color="#e0c400" />
    </div>
  );
}

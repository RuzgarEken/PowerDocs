import React from 'react';
import styles from './styles.module.css';
import RepositoryIcon from '../PowerSpec/assets/StatRepositoryIcon.png';
import EnvironmentIcon from '../PowerSpec/assets/StatEnvironmentDefIcon.png';
import ContainerIcon from '../PowerSpec/assets/StatContainerIcon.png';

// Illustrative distribution of container types across environments.
const ENVIRONMENTS = [
  {
    name: '',
    containers: ['FloatStats', 'IntStats', 'Vector3', 'String'],
  },
  {
    name: '',
    containers: [
      'Modifiers',
      'ConditionalModifiers',
      'DurationModifiers',
      'Limiters',
      'Reflectors',
    ],
  },
  {
    name: '',
    containers: [
      'CounterEffects',
      'StateBasedEffect',
      'Generators',
      'EffectPack',
      'Director',
    ],
  },
];

/**
 * Stat Repository → Environments → Container types.
 * Stats inside a Container are covered by a separate diagram.
 */
export default function StatStructure() {
  return (
    <div className={styles.repo}>
      <div className={styles.repoHeader}>
        <span className={styles.repoIcon}>
          <img src={RepositoryIcon} alt="" />
        </span>
        <span className={styles.repoTitle}>Stat Repository</span>
      </div>

      <div className={styles.envRow}>
        {ENVIRONMENTS.map((env) => (
          <div key={env.name} className={styles.env}>
            <div className={styles.envHeader}>
              <img src={EnvironmentIcon} alt="" className={styles.envIcon} />
              <span>
                Environment{' '}
                <span className={styles.envName}>&middot; {env.name}</span>
              </span>
            </div>
            <ul className={styles.containerList}>
              {env.containers.map((c) => (
                <li key={c} className={styles.container}>
                  <img
                    src={ContainerIcon}
                    alt=""
                    className={styles.containerIcon}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

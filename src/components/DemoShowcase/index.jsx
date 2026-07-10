import React from 'react';
import styles from './styles.module.css';

export default function DemoShowcase() {
  return (
    <section className={styles.demoSection}>
      <h2 className={styles.sectionTitle}>See Power in Action</h2>
      <p className={styles.subtitle}>
        Explore how Power can be used to build both realtime and turn-based gameplay.
      </p>

      <div className={styles.demoGrid}>
        <div className={styles.demoCard}>
          <img
            src="/img/3dcells.gif"
            alt="3DCells Demo"
          />

          <h3>Realtime Demo</h3>

          <p>
            Discover how Power drives action combat, skills, status effects,
            collision-based interactions, and dynamic gameplay mechanics.
          </p>

          <a className="button button--primary" href="/docs/Samples/3DCells">
            View Demo
          </a>
        </div>

        <div className={styles.demoCard}>
          <img
            src="/img/SlayTheSphere.gif"
            alt="Slay The Sphere Demo"
          />

          <h3>Turn-Based Demo</h3>

          <p>
            See how the same Power assets can be used to build card battles,
            relics, potions, turn-based combat, and complex status effects.
          </p>

          <a className="button button--primary" href="/docs/Samples/SlayTheSphere">
            View Demo
          </a>
        </div>
      </div>
    </section>
  );
}
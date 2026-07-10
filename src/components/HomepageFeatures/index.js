import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Friendly',
    description: (
      <>
        Create game mechanics by connecting Power assets. Most gameplay systems
        can be built without writing custom code.
      </>
    ),
  },
  {
    title: 'Stat Agnostic',
    description: (
      <>
        Power has no predefined stats. Every stat&apos;s purpose and behavior are
        defined entirely by the relationships you create.
      </>
    ),
  },
  {
    title: 'Effect Centric',
    description: (
      <>
        Go beyond primitive values. Power provides specialized stat types that
        enable rich gameplay interactions and complex effects.
      </>
    ),
  },
  {
    title: 'Minds Its Own Business',
    description: (
      <>
        Power operates within a well-defined scope, allowing you to extend it
        freely in your own game logic.
      </>
    ),
  },
  {
    title: 'Realtime & Turn-Based',
    description: (
      <>
        Build realtime, turn-based, or hybrid gameplay using the same set of
        Power assets.
      </>
    ),
  },
];
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

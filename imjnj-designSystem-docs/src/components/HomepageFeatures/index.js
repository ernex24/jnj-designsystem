import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import BackGroundBox from '../../theme/images/boxes1.png';

const FeatureList = [
  {
    title: 'Easy to Use',
    Imagen: '../../theme/images/boxes1.png',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Imagen: '../../theme/images/boxes2.png',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Imagen: '../../theme/images/boxes3.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Imagen, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Imagen} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" >{title}</Heading>
        <p >{description}</p>
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

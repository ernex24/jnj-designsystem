import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Button from '@mui/material/Button';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import { ThemeProvider } from '@mui/material/styles';

import jnjTheme from '../theme/theme'; // Adjust path as needed
import '../theme/styles.css'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (


    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title jnj-margin-bottom-16">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Button  component={Link}  to="/docs/intro" variant="contained">Getting Started</Button>
        </div>
      </div>
    </header>
  
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ThemeProvider theme={jnjTheme}>
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
    </ThemeProvider>
  );
}

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Button from '@mui/material/Button';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import { motion } from "framer-motion";

import jnjTheme from '../theme/theme'; // Adjust path as needed
import '../theme/styles.css'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
     <>
       <ThemeProvider theme={jnjTheme}>
    <motion.div initial={{ zIndex:200, opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, type: "spring",  duration: 2  }}>
      <div className='heroImage1'></div>
      </motion.div>
      <motion.div animate={{ scale: 0.9 }} transition={{ type: "spring",   ease: "linear", duration: 4, x: { duration: 2 } }} >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      
      <div className="container heroTitle1">
        <motion.div animate={{ scale: 1.2 }} transition={{ type: "spring",   ease: "linear", duration: 2 }} >

          <Typography 
          variant="h1" 
          color='white' 
          gutterBottom
          sx={{ md: { fontSize: '10px' }}}
          >
            Empowering your vision <br/> with our design system
          </Typography>

          <Typography variant="subHeader" color='white' gutterBottom>Beautiful and easy to use UI components <br/> for data heavy interfaces.</Typography>
          <Box  sx={{ mt: 4 }}><Button color='secondary' component={Link}  to="/docs/intro" variant="contained">Getting Started</Button></Box>
        </motion.div>
      </div>
    </header>
    </motion.div>
    </ThemeProvider>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ThemeProvider theme={jnjTheme}>
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Beautiful and easy to use UI components for data heavy interfaces.">
      <HomepageHeader />
        {/* <main> <HomepageFeatures /> </main> */}
    </Layout>
    </ThemeProvider>
  );
}

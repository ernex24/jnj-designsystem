import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Button from '@mui/material/Button';
import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"
import '../theme/styles.css'

function HomepageHeader() {

  const {siteConfig} = useDocusaurusContext();
  const theme = useTheme();
  
  return (
     <>
   
       <Analytics/>
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
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '2.4rem !important',
              lineHeight: '2.5rem !important' // Equivalent to h4
            },
          }}
          >
            Empowering your vision <br/> with our design system
          </Typography>

          <Typography 
          variant="subHeader" 
          color='white'
          gutterBottom
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '1.25rem !important',
              lineHeight: '1.1rem !important' // Equivalent to h4
            },
          }}
          >Beautiful and easy to use UI components <br/> for data heavy interfaces.</Typography>
          <Box  sx={{ mt: 4 }}><Button color='secondary' component={Link}  to="/docs/intro" variant="contained">Getting Started</Button></Box>
        </motion.div>
      </div>
    </header>
    </motion.div>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Beautiful and easy to use UI components for data heavy interfaces.">
      <HomepageHeader />
        {/* <main> <HomepageFeatures /> </main> */}
    </Layout>
  );
}

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../theme/theme.js'; // Adjust path as needed
import DocusaurusLayout from '@theme/Layout'; // Import Docusaurus's Layout
import '../theme/styles.css'
function CustomLayout(props) {
    return (
        <ThemeProvider theme={jnjTheme}>
            <DocusaurusLayout {...props} />
        </ThemeProvider>
    );
}

export default CustomLayout;
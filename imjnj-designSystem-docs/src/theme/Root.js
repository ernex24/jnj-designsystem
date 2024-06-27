import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

export default function Root({ children }) {
  return (
    <ThemeProvider theme={jnjTheme}>
      {children}
    </ThemeProvider>
  );
}
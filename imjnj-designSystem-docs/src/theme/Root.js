import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';
import { LicenseInfo } from '@mui/x-license';

LicenseInfo.setLicenseKey('f3bd45cb9106eb104e32624f156b9785Tz04NzMwNixFPTE3NDMxNjgxNjYwMDAsUz1wcmVtaXVtLExNPXN1YnNjcmlwdGlvbixLVj0y');


export default function Root({ children }) {
  return (
    <ThemeProvider theme={jnjTheme}>
      {children}
    </ThemeProvider>
  );
}
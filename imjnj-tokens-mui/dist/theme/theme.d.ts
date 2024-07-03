// src/theme.d.ts
import '@mui/material/styles';
import '@mui/material/Chip';
import '@mui/material/Chip';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    'filled-light': true;
  }
}

declare module '@mui/material/styles' {

  interface Theme {
    charts?: {
      main: string;
      yellow50: string;
      orange70: string;
      red90: string;
      purple40: string;
      purple50: string;
      purple80: string;
      blue40: string;
      blue50: string;
      blue80: string;
      green40: string;
      green50: string;
      green80: string;
    };
  }
  
  interface ThemeOptions {
    charts?: {
      main: string;
      yellow50: string;
      orange70: string;
      red90: string;
      purple40: string;
      purple50: string;
      purple80: string;
      blue40: string;
      blue50: string;
      blue80: string;
      green40: string;
      green50: string;
      green80: string;
    };
  }
}

declare module '@mui/material/styles' {

    interface TypographyVariants {
      bodyS: React.CSSProperties;
      bodySmed: React.CSSProperties;
      bodySbold: React.CSSProperties;
      bodyM: React.CSSProperties;
      bodyMmed: React.CSSProperties;
      bodyMbold: React.CSSProperties;
      bodyL: React.CSSProperties;
      bodyLmed: React.CSSProperties;
      bodyLbold: React.CSSProperties;
      body1: React.CSSProperties;
      body2: React.CSSProperties;
      caption: React.CSSProperties;
      eyebrow: React.CSSProperties;
      button: React.CSSProperties;
      subtitle1: React.CSSProperties;
      subtitle2: React.CSSProperties;
      subHeader: React.CSSProperties;
    }
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      bodyS?: React.CSSProperties;
      bodySmed?: React.CSSProperties;
      bodySbold?: React.CSSProperties;
      bodyM?: React.CSSProperties;
      bodyMmed?: React.CSSProperties;
      bodyMbold?: React.CSSProperties;
      bodyL?: React.CSSProperties;
      bodyLmed?: React.CSSProperties;
      bodyLbold?: React.CSSProperties;
      body1?: React.CSSProperties;
      body2?: React.CSSProperties;
      caption?: React.CSSProperties;
      eyebrow?: React.CSSProperties;
      button?: React.CSSProperties;
      subtitle1?: React.CSSProperties;
      subtitle2?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyS: true;
    bodySmed: true;
    bodySbold: true;
    bodyM: true;
    bodyMmed: true;
    bodyMbold: true;
    bodyL: true;
    bodyLmed: true;
    bodyLbold: true;
    body1: true;
    body2: true;
    caption: true;
    eyebrow: true;
    button: true;
    subtitle1: true;
    subtitle2: true;
  }
}

export {};

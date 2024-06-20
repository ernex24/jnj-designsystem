import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gray: {
      main: string;
      gray10: string;
      gray20: string;
      gray30: string;
      gray40: string;
      gray50: string;
      gray60: string;
      gray70: string;
      gray80: string;
    };
    charts: {
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

  interface PaletteOptions {
    gray?: {
      main?: string;
      gray10?: string;
      gray20?: string;
      gray30?: string;
      gray40?: string;
      gray50?: string;
      gray60?: string;
      gray70?: string;
      gray80?: string;
    };
    charts?: {
      main?: string;
      yellow50?: string;
      orange70?: string;
      red90?: string;
      purple40?: string;
      purple50?: string;
      purple80?: string;
      blue40?: string;
      blue50?: string;
      blue80?: string;
      green40?: string;
      green50?: string;
      green80?: string;
    };
  }
}
import { createTheme } from '@mui/material/styles';
import './jnjFonts.css';
const jnjTheme = createTheme({
    breakpoints: {
        values: {
            xs: 8,
            sm: 600,
            md: 900,
            lg: 1296,
            xl: 1536,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#eb1700',
        },
        secondary: {
            main: '#212121',
        },
        text: {
            disabled: '#c1bbb3',
            secondary: '#212121',
            primary: '#212121',
        },
        warning: {
            main: '#f5ac25',
            light: '#FDF0E6',
            dark: '#F37820',
        },
        info: {
            main: '#00a0df',
            light: '#EAF9FF',
            dark: '#1C75BC',
        },
        success: {
            main: '#6EBD44',
            light: '#EAF2EA',
            dark: '#359942',
        },
        error: {
            main: '#D32F2F',
            light: '#FBEAEA',
            dark: '#C62828',
        },
        divider: 'rgba(33,33,33,0.1)',
        gray: {
            main: '#F9F8F7',
            gray10: '#F9F8F7',
            gray20: '#F1EFED',
            gray30: '#E8E6E3',
            gray40: '#D5CFC9',
            gray50: '#C1BBB3',
            gray60: '#A39992',
            gray70: '#81766F',
            gray80: '#564C47'
        },
        charts: {
            main: '#eb1700',
            yellow50: '#FBE058',
            orange70: '#FF6017',
            red90: '#9E0000',
            purple40: '#B19BEB',
            purple50: '#8C3BBB',
            purple80: '#541980',
            blue40: '#69D0FF',
            blue50: '#0F68B2',
            blue80: '#004685',
            green40: '#53CE76',
            green50: '#328714',
            green80: '#3B5A0D',
        },
    },
    shape: {
        borderRadius: 8,
    },
    spacing: [0, 2, 4, 8, 16, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176],
    components: {
        MuiSlider: {
            styleOverrides: {
                root: {
                    fontFamily: 'Johnson Text Bold',
                    fontSize: '0.87rem',
                    lineHeight: '1rem',
                },
            },
        },
        MuiRadio: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: '8px',
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: '8px',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
            },
            variants: [
                {
                    props: {
                        variant: 'text',
                        size: 'small',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        padding: '4px 8px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: '#B80000',
                        },
                        '&:active': {
                            color: '#fff',
                            backgroundColor: '#F15D4D',
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        size: 'medium',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        padding: '8px 16px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: '#B80000',
                        },
                        '&:active': {
                            color: '#fff',
                            backgroundColor: '#F15D4D',
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        size: 'large',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        textTransform: 'none',
                        padding: '8px 16px',
                        borderRadius: 100,
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: '#B80000',
                        },
                        '&:active': {
                            color: '#fff',
                            backgroundColor: '#F15D4D',
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        size: 'small',
                        color: 'secondary',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        padding: '4px 8px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: '#564C47',
                        },
                        '&:active': {
                            color: '#fff',
                            backgroundColor: '#81766F',
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        size: 'medium',
                        color: 'secondary',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        padding: '8px 16px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: '#564C47',
                        },
                        '&:active': {
                            color: '#fff',
                            backgroundColor: '#81766F',
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        size: 'large',
                        color: 'secondary',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        textTransform: 'none',
                        padding: '8px 16px',
                        borderRadius: 100,
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: '#564C47',
                        },
                        '&:active': {
                            color: '#fff',
                            backgroundColor: '#81766F',
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        size: 'small',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        textTransform: 'none',
                        borderRadius: 100,
                        padding: '4px 8px',
                        '&:hover': {
                            backgroundColor: '#B80000',
                        },
                        '&:active': {
                            backgroundColor: '#F15D4D',
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        size: 'medium',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        textTransform: 'none',
                        borderRadius: 100,
                        padding: '8px 16px',
                        '&:hover': {
                            backgroundColor: '#B80000',
                        },
                        '&:active': {
                            backgroundColor: '#F15D4D',
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        size: 'large',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        textTransform: 'none',
                        borderRadius: 100,
                        padding: '8px 16px',
                        '&:hover': {
                            backgroundColor: '#B80000',
                        },
                        '&:active': {
                            backgroundColor: '#F15D4D',
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        color: 'secondary',
                        size: 'small',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        textTransform: 'none',
                        borderRadius: 100,
                        padding: '4px 8px',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#564C47',
                        },
                        '&:active': {
                            backgroundColor: '#81766F',
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        color: 'secondary',
                        size: 'medium',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        textTransform: 'none',
                        borderRadius: 100,
                        padding: '8px 16px',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#564C47',
                        },
                        '&:active': {
                            backgroundColor: '#81766F',
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        color: 'secondary',
                        size: 'large',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        textTransform: 'none',
                        borderRadius: 100,
                        padding: '8px 16px',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#564C47',
                        },
                        '&:active': {
                            backgroundColor: '#81766F',
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'primary',
                        size: 'small',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        textTransform: 'none',
                        padding: '4px 8px',
                        color: '#212121',
                        borderRadius: 100,
                        '&:hover': {
                            backgroundColor: '#B80000',
                            color: '#fff',
                        },
                        '&:active': {
                            backgroundColor: '#F15D4D',
                            color: '#fff',
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'primary',
                        size: 'medium',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        textTransform: 'none',
                        padding: '8px 16px',
                        color: '#212121',
                        borderRadius: 100,
                        '&:hover': {
                            backgroundColor: '#B80000',
                            color: '#fff',
                        },
                        '&:active': {
                            backgroundColor: '#F15D4D',
                            color: '#fff',
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'primary',
                        size: 'large',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        textTransform: 'none',
                        padding: '8px 16px',
                        color: '#212121',
                        borderRadius: 100,
                        '&:hover': {
                            backgroundColor: '#B80000',
                            color: '#fff',
                        },
                        '&:active': {
                            backgroundColor: '#F15D4D',
                            color: '#fff',
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'secondary',
                        size: 'small',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        padding: '4px 8px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            backgroundColor: '#564C47',
                            color: '#fff',
                        },
                        '&:active': {
                            backgroundColor: '#81766F',
                            color: '#fff',
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'secondary',
                        size: 'medium',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        padding: '8px 16px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            backgroundColor: '#564C47',
                            color: '#fff',
                        },
                        '&:active': {
                            backgroundColor: '#81766F',
                            color: '#fff',
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'secondary',
                        size: 'large',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        padding: '8px 16px',
                        textTransform: 'none',
                        borderRadius: 100,
                        '&:hover': {
                            backgroundColor: '#564C47',
                            color: '#fff',
                        },
                        '&:active': {
                            backgroundColor: '#81766F',
                            color: '#fff',
                        },
                    },
                },
            ],
        },
        MuiButtonGroup: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    backgroundColor: '#EAF2EA',
                    color: '#212121',
                },
                filledError: {
                    backgroundColor: '#FBEAEA',
                    color: '#212121',
                },
                filledWarning: {
                    backgroundColor: '#FDF0E6',
                    color: '#212121',
                },
                filledInfo: {
                    backgroundColor: '#EAF9FF',
                    color: '#212121',
                },
                outlinedSuccess: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    borderColor: 'rgba(33,33,33,0.1)',
                },
                outlinedError: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    borderColor: 'rgba(33,33,33,0.1)',
                },
                outlinedWarning: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    borderColor: 'rgba(33,33,33,0.1)',
                },
                outlinedInfo: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    borderColor: 'rgba(33,33,33,0.1)',
                },
                standardSuccess: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
                },
                standardError: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
                },
                standardWarning: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
                },
                standardInfo: {
                    backgroundColor: '#ffffff',
                    color: '#212121',
                    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
                },
            },
        },
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: 'Johnson Text Medium',
        h1: {
            fontFamily: 'Johnson Display Bold',
            fontSize: '3.8rem',
            lineHeight: '3.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        h2: {
            fontFamily: 'Johnson Display Bold',
            fontSize: '3rem',
            lineHeight: '3rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        h3: {
            fontFamily: 'Johnson Display Bold',
            fontSize: '2.4rem',
            lineHeight: '2.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        h4: {
            fontFamily: 'Johnson Display Bold',
            fontSize: '1.9rem',
            lineHeight: '2rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        h5: {
            fontFamily: 'Johnson Display Bold',
            fontSize: '1.5rem',
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        h6: {
            fontFamily: 'Johnson Display Bold',
            fontSize: '1.25rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        subtitle1: {
            fontFamily: 'Johnson Text Light',
            fontSize: '1.25rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        subtitle2: {
            fontFamily: 'Johnson Text Light',
            fontSize: '1.25rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyS: {
            fontFamily: 'Johnson Text Regular',
            fontSize: '0.87rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodySmed: {
            fontFamily: 'Johnson Text Medium',
            fontSize: '0.87rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodySbold: {
            fontFamily: 'Johnson Text Bold',
            fontSize: '0.87rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyM: {
            fontFamily: 'Johnson Text Regular',
            fontSize: '1rem',
            lineHeight: '1.12rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyMmed: {
            fontFamily: 'Johnson Text Medium',
            fontSize: '1rem',
            lineHeight: '1.12rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyMbold: {
            fontFamily: 'Johnson Text Bold',
            fontSize: '1rem',
            lineHeight: '1.12rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyL: {
            fontFamily: 'Johnson Text Regular',
            fontSize: '1.12rem',
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyLmed: {
            fontFamily: 'Johnson Text Medium',
            fontSize: '1.12rem',
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        bodyLbold: {
            fontFamily: 'Johnson Text Bold',
            fontSize: '1.12rem',
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        body1: {
            fontFamily: 'Johnson Text Regular',
            fontSize: '1rem',
            lineHeight: '1.12rem',
        },
        body2: {
            fontFamily: 'Johnson Text Regular',
            fontSize: '1rem',
            lineHeight: '1.12rem',
        },
        caption: {
            fontFamily: 'Johnson Text Light',
            fontSize: '0.62rem',
            lineHeight: '1rem',
            letterSpacing: '0em',
            color: '#81766F',
        },
        eyebrow: {
            fontFamily: 'Johnson Text Regular',
            fontSize: '2rem',
            lineHeight: '2.5rem',
            letterSpacing: '0em',
            color: '#eb1700',
        },
        button: {
            fontFamily: 'Johnson Text Light',
            fontSize: '1.12rem',
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            textTransform: 'none',
        },
        overline: undefined,
    },
});
export default jnjTheme;

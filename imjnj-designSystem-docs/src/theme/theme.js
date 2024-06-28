import { createTheme } from '@mui/material/styles';
import './styles.css'

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
            primary: '#eb1700',
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
    
    shadows: [
        "none",
        "0px 4px 16px 0px rgba(0, 0, 0, 0.06)",
        "0px 0px 8px 0px rgba(0, 0, 0, 0.16)",
        "0px 4px 16px 0px rgba(0, 0, 0, 0.16)",
        "0px 4px 32px 0px rgba(0, 0, 0, 0.24)",
        "0px 4px 40px 0px rgba(0, 0, 0, 0.32)",
        ...Array(20).fill('none')
      ],
    
    components: {

        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F1EFED',
                    color: '#212121',
                    fontFamily: 'Johnson Text Regular',
                    fontSize: '0.875',
                    lineHeight: '1rem',
                },
                label: {
              
                },
                deleteIcon: {
                    color: '#A39992',
                  '&:hover': {
                    color: '#212121',
                  },
                },
              },
            variants: [
              // default variant
              {
                props: { variant: 'filled', color: 'default', size: 'small' },
                style: {
                  backgroundColor: '#A39992',
                  color: '#fff',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#81766F'
                  },
                  '& .MuiChip-icon': {
                    color: '#fff',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                    '&:hover': {
                      color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'filled-ligth', color: 'default', size: 'small' },
                style: {
                  backgroundColor: '#F1EFED',
                  color: '#212121',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#F1EFED'
                  },
                  '& .MuiChip-icon': {
                    color: '#212121',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#212121',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'default', size: 'small' },
                style: {
                  backgroundColor: 'transparent',
                  border: '1px solid #A39992',
                  color: '#212121',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#F1EFED'
                  },
                  '& .MuiChip-icon': {
                    color: '#212121',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#A39992',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
               // success variant
               {
                props: { variant: 'filled', color: 'success', size: 'small' },
                style: {
                  backgroundColor: '#53CE76',
                  color: '#fff',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#328714'
                  },
                  '& .MuiChip-icon': {
                    color: '#fff',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                    '&:hover': {
                      color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'filled-ligth', color: 'success', size: 'small' },
                style: {
                  backgroundColor: '#EAF2EA',
                  color: '#359942',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#EAF2EA'
                  },
                  '& .MuiChip-icon': {
                    color: '#359942',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#359942',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'success', size: 'small' },
                style: {
                  backgroundColor: 'transparent',
                  border: '1px solid #53CE76',
                  color: '#359942',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#F9F8F7'
                  },
                  '& .MuiChip-icon': {
                    color: '#359942',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#359942',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
               // warning variant
               {
                props: { variant: 'filled', color: 'warning', size: 'small' },
                style: {
                  backgroundColor: '#F5AC25',
                  color: '#fff',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#F37820'
                  },
                  '& .MuiChip-icon': {
                    color: '#fff',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                    '&:hover': {
                      color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'filled-ligth', color: 'warning', size: 'small' },
                style: {
                  backgroundColor: '#FDF0E6',
                  color: '#F37820',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#FDF0E6'
                  },
                  '& .MuiChip-icon': {
                    color: '#F37820',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#F37820',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'warning', size: 'small' },
                style: {
                  backgroundColor: 'transparent',
                  border: '1px solid #F5AC25',
                  color: '#F37820',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#F9F8F7'
                  },
                  '& .MuiChip-icon': {
                    color: '#F37820',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#F37820',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
              // error variant
              {
                props: { variant: 'filled', color: 'error', size: 'small' },
                style: {
                  backgroundColor: '#D32F2F',
                  color: '#fff',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#D32F2F'
                  },
                  '& .MuiChip-icon': {
                    color: '#fff',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                    '&:hover': {
                        color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'filled-ligth', color: 'error', size: 'small' },
                style: {
                  backgroundColor: '#FBEAEA',
                  color: '#C62828',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#FBEAEA'
                  },
                  '& .MuiChip-icon': {
                    color: '#C62828',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#C62828',
                    '&:hover': {
                        color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'error', size: 'small' },
                style: {
                  backgroundColor: 'transparent',
                  border: '1px solid #D32F2F',
                  color: '#C62828',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#FBEAEA'
                  },
                  '& .MuiChip-icon': {
                    color: '#C62828',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#C62828',
                    '&:hover': {
                      color: '#212121',
                    },
                  },
                },
              },
               // info variant
               {
                props: { variant: 'filled', color: 'info', size: 'small' },
                style: {
                  backgroundColor: '#1C75BC',
                  color: '#fff',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#00A0DF'
                  },
                  '& .MuiChip-icon': {
                    color: '#fff',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                    '&:hover': {
                        color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'filled-ligth', color: 'info', size: 'small' },
                style: {
                  backgroundColor: '#EAF9FF',
                  color: '#1C75BC',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#EAF9FF'
                  },
                  '& .MuiChip-icon': {
                    color: '#1C75BC',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#1C75BC',
                    '&:hover': {
                        color: '#C62828',
                    },
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'info', size: 'small' },
                style: {
                  backgroundColor: 'transparent',
                  border: '1px solid #00A0DF',
                  color: '#1C75BC',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#EAF9FF'
                  },
                  '& .MuiChip-icon': {
                    color: '#1C75BC',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#1C75BC',
                    '&:hover': {
                      color: '#C62828',
                    },
                  },
                },
              },
               // primary variant
               {
                props: { variant: 'filled', color: 'primary', size: 'small' },
                style: {
                  backgroundColor: '#EB1700',
                  color: '#fff',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#B80000'
                  },
                  '& .MuiChip-icon': {
                    color: '#fff',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                    '&:hover': {
                        color: '#212121',
                    },
                  },
                },
              },
              {
                props: { variant: 'filled-ligth', color: 'primary', size: 'small' },
                style: {
                  backgroundColor: '#FBEAEA',
                  color: '#EB1700',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#FBEAEA'
                  },
                  '& .MuiChip-icon': {
                    color: '#EB1700',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#EB1700',
                    '&:hover': {
                        color: '#C62828',
                    },
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'primary', size: 'small' },
                style: {
                  backgroundColor: 'transparent',
                  border: '1px solid #EB1700',
                  color: '#EB1700',
                  fontFamily: 'Johnson Text Regular',
                  fontSize: '0.875',
                  lineHeight: '1rem',
                  '&:hover': {
                    backgroundColor: '#FBEAEA'
                  },
                  '& .MuiChip-icon': {
                    color: '#EB1700',
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#EB1700',
                    '&:hover': {
                      color: '#EB1700',
                    },
                  },
                },
              },
                // secondary variant
                {
                    props: { variant: 'filled', color: 'secondary', size: 'small' },
                    style: {
                      backgroundColor: '#212121',
                      color: '#fff',
                      fontFamily: 'Johnson Text Regular',
                      fontSize: '0.875',
                      lineHeight: '1rem',
                      '&:hover': {
                        backgroundColor: '#000000'
                      },
                      '& .MuiChip-icon': {
                        color: '#fff',
                      },
                      '& .MuiChip-deleteIcon': {
                        color: '#fff',
                        '&:hover': {
                            color: '#212121',
                        },
                      },
                    },
                  },
                  {
                    props: { variant: 'filled-ligth', color: 'secondary', size: 'small' },
                    style: {
                      backgroundColor: '#F1EFED',
                      color: '#212121',
                      fontFamily: 'Johnson Text Regular',
                      fontSize: '0.875',
                      lineHeight: '1rem',
                      '&:hover': {
                        backgroundColor: '#F1EFED'
                      },
                      '& .MuiChip-icon': {
                        color: '#212121',
                      },
                      '& .MuiChip-deleteIcon': {
                        color: '#212121',
                        '&:hover': {
                            color: '#C62828',
                        },
                      },
                    },
                  },
                  {
                    props: { variant: 'outlined', color: 'secondary', size: 'small' },
                    style: {
                      backgroundColor: 'transparent',
                      border: '1px solid #212121',
                      color: '#212121',
                      fontFamily: 'Johnson Text Regular',
                      fontSize: '0.875',
                      lineHeight: '1rem',
                      '&:hover': {
                        backgroundColor: '#F1EFED'
                      },
                      '& .MuiChip-icon': {
                        color: '#212121',
                      },
                      '& .MuiChip-deleteIcon': {
                        color: '#212121',
                        '&:hover': {
                          color: '#EB1700',
                        },
                      },
                    },
                  },
            ]
        },
    
        MuiAutocomplete: {
            styleOverrides: {
              popupIndicator: {
                '&.MuiAutocomplete-popupIndicator': {
                 paddingRight: '8px'
                },
              },
            },
          },

        MuiAutocomplete: {
            styleOverrides: {
              paper: {
                color: '#212121', // Change the text color
              },
            },
          },

        MuiPickersArrowSwitcher: {
            styleOverrides: {
              root: {
                '& .MuiTypography-root': {
                    fontSize: '1rem', // Change font size
                    color: '#212121', // Change text color
                    fontFamily: 'Johnson Text Bold',
                 }
              },
            },
          },

        MuiPickersCalendarHeader: {
            styleOverrides: {
                
              dayLabel: {
                fontSize: '1rem', // Change font size
                color: '#212121', // Change text color
                fontFamily: 'Johnson Text Bold',
              },
                switchViewButton: {
                  fontFamily: 'Johnson Text Bold',
                  color: '#212121', // Change color of the month switch view button
                },
                label: {
                  fontSize: '1.2rem', // Change font size of the month label
                  color: '#212121', // Change color of the month label
                  fontFamily: 'Johnson Text Bold',
                },
                '& .MuiPickersYear-yearButton': {
                    fontSize: '1rem', // Change the font size of the calendar numbers
                    fontFamily: 'Johnson Text Regular',
                    color: '#212121',
                }
            },
          },
        MuiPickersDay: {
            styleOverrides: {
              root: {
                fontSize: '1rem', // Change the font size of the calendar numbers
                lineHeight: '1rem',
                fontFamily: 'Johnson Text Regular',
                color: '#212121'
              },
            },
          },
          MuiPickersYear: {
            styleOverrides: {
              root: {
                '& .MuiPickersYear-yearButton': {
                    fontSize: '1rem', // Change the font size of the calendar numbers
                    fontFamily: 'Johnson Text Regular',
                    color: '#212121',
                }
              },
            },
          },
        MuiPopper: {
            styleOverrides: {
              root: {
                backgroundColor: 'white', // Example: Customize the background color
                boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.24)', // Example: Add a box shadow
                borderRadius: '16px',
              },
            },
          },
        MuiMenu: {
            styleOverrides: {
              paper: {
                backgroundColor: '#ffffff', // Default background color for the menu
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)', // Default shadow for the menu
                borderRadius: '8px', // Border radius for the menu
              },
            },
          },

        MuiMenuItem: {
            styleOverrides: {
              root: {
                backgroundColor: '#ffffff', // Default background color
                '&:hover': {
                  backgroundColor: '#E8E6E3', // Background color on hover
                },
                '&.Mui-selected': {
                  backgroundColor: '#E8E6E3', // Background color when selected
                },
              },
            },
          },

        MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: '8px', // Set the border radius to make it rounded
                fontSize: '16px',
                '& fieldset': {
                  borderColor: '#A39992', // Default border color
                },
                '& .MuiInputLabel-root': {
                  position: 'static',
                  transform: 'none',
                },
                '&:hover fieldset': {
                  borderColor: '#212121 !important', // Change border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#eb1700 !important', // Change border color on focus
                  boxShadow: `0 0 0 3px rgba(235, 23, 0, 0.2)`, // Box shadow when focused
                },
                '&.Mui-disabled fieldset': {
                  borderColor: '#F1EFED', // Change border color when disabled
                  backgroundColor: '#F1EFED', // Change background color when disabled
                  color: '#C1BBB3',
                },
                '&.Mui-error fieldset': {
                  borderColor: '#D32F2F', // Change border color on error
                },
                '& legend': {
                  width: '0', // Remove space of the legend
                  visibility: 'hidden', // Hide the legend
                },
              },
              input: {
                fontFamily: 'Johnson Text Regular',
                lineHeight: '24px',
                color: '#212121',
                '&::placeholder': {
                  color: '#A39992', // Placeholder text color
                  opacity: 1,
                },
            variants: [
              {
                props: { size: 'small' },
                style: {
                    padding: '6px 8px',
                    fontSize: '14px',
                },
              },
              {
                props: { size: 'medium' },
                style: {
                    padding: '8px 8px',
                    fontSize: '16px',
                },
              },
              {
                props: { size: 'large' },
                style: {
                    padding: '12px 8px',
                    fontSize: '18px',
                },
              },
            ],
        },
        },
          },

        MuiInputLabel: {
            styleOverrides: {
              root: {
                fontFamily: 'Johnson Text Medium',
                fontSize: '14px',
                position: 'static',
                transform: 'none',
                color: 'black', // Change this to your desired label color
                '&.Mui-disabled': {
                  color: '#A39992'
                },
                shrink: {
                    transform: 'none',
                  },
              },
            },
          },

        // MuiTextField: {
        //     styleOverrides: {
        //       root: {
        //         '& .MuiInputBase-root': {
        //           borderRadius: '4px', // Default border radius
        //           fontFamily: 'Johnson Text Regular',
        //           lineHeight: '24px',
        //           fontSize: '16px',
        //           color: '#212121',
        //           margin: 0,
        //           '&:hover': {
        //           },
        //           '&.Mui-focused': {
        //             borderColor: '#eb1700', // Change border color on focus
        //             boxShadow: `0 0 0 3px rgba(235, 23, 0, 0.5)`, // Box shadow when focused
        //           },
        //           '&.Mui-disabled': {
        //             borderColor: '#F1EFED', // Change border color when disabled
        //             backgroundColor: '#F1EFED', // Change background color when disabled
        //             color: '#A39992', // Change text color when disabled
        //           },
        //           '&.Mui-error': {
        //             color: '#eb1700',
        //             borderColor: '#D32F2F', // Change border color on error
        //           },
        //         },
        //         '& .MuiInputBase-input': {
        //           padding: '0px',
        //           '&::placeholder': {
        //             color: '#A39992', // Placeholder text color
        //             opacity: 1,
        //           },
        //         },
        //         'MuiOutlinedInput-notchedOutline': {
        //             border: '1px solid #A39992', 
        //         },
        //         '& .MuiInputLabel-root': {
        //           fontFamily: 'Johnson Text Medium',
        //           fontSize: '14px',
        //           position: 'static',
        //           transform: 'none',
        //           '&.Mui-disabled': {
        //             color: '#A39992'
        //           },
        //         },
        //       },
        //     },
        //   },
        

        // MuiInputBase: {
        //     styleOverrides: {
        //       root: {

        //         border: '1px solid #A39992', // Default border
        //         borderRadius: '8px', // Default border radius
        //         fontFamily: 'Johnson Text Regular',
        //         lineHeight: '24px',
        //         color: '#212121',
  
        //         '&:hover': {
        //           borderColor: '#212121', // Change border color on hover
        //         },
        //         '&.Mui-focused': {
        //           borderColor: '#eb1700', // Change border color on focus
        //           boxShadow: `0 0 0 3px rgba(235, 23, 0, 0.5)`, // Box shadow when focused
        //         },
        //         '&.Mui-disabled': {
        //           borderColor: '#F1EFED', // Change border color when disabled
        //           backgroundColor: '#F1EFED', // Change background color when disabled
        //           color: '#A39992', // Change text color when disabled
        //         },
        //         '&.Mui-error': {
        //           color: '#eb1700',
        //           borderColor: '#D32F2F', // Change border color on error
        //         },
        //       },
        //       input: {
        //         padding: '0px',
        //         '&::placeholder': {
        //           color: '#A39992', // Placeholder text color
        //           opacity: 1,
        //         },
        //       },
        //     },
        //     variants: [
        //       {
        //         props: { size: 'small' },
        //         style: {
        //           fontSize: '14px',
        //           padding: '5px 8px',
        //         },
        //       },
        //       {
        //         props: { size: 'medium' },
        //         style: {
        //           fontSize: '16px',
        //           padding: '8px 12px',
        //         },
        //       },
        //       {
        //         props: { size: 'large' },
        //         style: {
        //           fontSize: '18px',
        //           padding: '10px 16px',
        //         },
        //       },
        //     ],
        //   },
          
        MuiTable: {
        styleOverrides: {
            root: {
                color: '#212121',
                fontFamily: 'Johnson Text Regular',
                borderRadius: 0
            },
            }
        },

        MuiTableRow: {
            styleOverrides: {
                root: {
                    color: '#212121',
                    fontFamily: 'Johnson Text Regular',
                    backgroundColor: '#ffffff',
                    borderRadius: 0
                },
            }
        },

        MuiTableBody: {
            styleOverrides: {
                root: {
                    color: '#212121',
                    fontFamily: 'Johnson Text Regular',
                    borderRadius: 0
                },
            }
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#212121',
                    fontFamily: 'Johnson Text Regular',
                    backgroundColor: '#ffffff',
                    border: 0,
                    borderRadius: 0
                },
                }
            },

            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        color: '#212121',
                        fontFamily: 'Johnson Text Regular',
                        backgroundColor: '#ffffff',
                        border: 0,
                        borderRadius: 0
                    },
                    }
                },
    

        
        MuiTableHead: {
            styleOverrides: {
                root: {
                    color: '#212121',
                    fontFamily: 'Johnson Text Regular',
                    backgroundColor: '#ffffff',
                    border: 0,
                    borderRadius: 0
                },
                }
            },
    

        MuiDataGrid: {
            styleOverrides: {
                root: {
                    fontFamily: 'Johnson Text Regular',
                    fontSize: '1rem',
                    lineHeight: '1.12rem',
                    letterSpacing: '0em',
                    color: '#212121',
                    border: 0,
                    '& .MuiTablePagination-root': {
                        color: '#212121',
                    },
                    '& .MuiDataGrid-window': {
                        color: '#212121',
                    },
                    '& .GridColumnMenu': {
                        color: '#212121',
                    },

                },
            },
        },
        MuiTab:{
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontFamily: 'Johnson Text Regular',
                    fontSize: '1rem',
                    lineHeight: '1.12rem',
                    letterSpacing: '0em',
                    color: '#212121',
                    padding: '16px 8px',
                    '&:hover': {
                     color: '#eb1700',
                    },
                    '&:active': {
                        color: '#212121',
                    },
                    '&.MuiTab-root.Mui-selected': {
                        color: '#212121',
                        fontFamily: 'Johnson Text Bold',
                    },
                    '&.disabled': {
                        color: '#c1bbb3',
                    },
                },
            },
        },

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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
                        padding: '4px 8px',
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
                        variant: 'contained',
                        size: 'medium',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1rem',
                        lineHeight: '1.12rem',
                        textTransform: 'none',
                        borderRadius: 12,
                        padding: '8px 16px',
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
                        variant: 'contained',
                        size: 'large',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '1.12rem',
                        lineHeight: '1.5rem',
                        textTransform: 'none',
                        borderRadius: 12,
                        padding: '8px 16px',
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
                        variant: 'contained',
                        color: 'secondary',
                        size: 'small',
                    },
                    style: {
                        fontFamily: 'Johnson Text Regular',
                        fontSize: '0.87rem',
                        lineHeight: '1rem',
                        textTransform: 'none',
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
                        borderRadius: 12,
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
            fontSize: '3.8rem',
            lineHeight: '3.5rem',
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
            fontFamily: 'Johnson Text Regular',
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
        subHeader: {
            fontFamily: 'Johnson Text Light',
            fontSize: '2rem',
            lineHeight: '2.5rem',
            letterSpacing: '0em',
            color: '#212121',
        },
        overline: undefined,
    },
});
export default jnjTheme;

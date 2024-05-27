import * as React from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import jnjTheme from '../../../src/theme/theme';
import Stack from '@mui/material/Stack';

export default function ColorSwatch({boxS = 2,borderR = 2, token, hex, rgb, textColor,  }) {

  return (

    <ThemeProvider theme={jnjTheme}>
    <Box

        sx={{
            width: 179,
            borderRadius: borderR,
            boxShadow: boxS,
            margin: 4,
        }}>

        <Box
    
        backgroundColor={token}
            sx={{
                width: 179,
                height: 115,
                borderRadius: '16px 16px 0 0',
                padding: 3,
              }}>
             <Typography color={textColor} variant="bodySbold">{token}</Typography>
        </Box>

        <Box     
            sx={{
                width: 179,
                height: 59,
                borderRadius: 1,
                padding: 3,
                }}>
                <Stack gap={2}>
                <Typography variant="bodySbold">{hex}</Typography>
                <Typography variant="bodyS">{rgb}</Typography>
                </Stack>
        </Box>

    </Box>
    </ThemeProvider>
  );
}
---
sidebar_position: 7
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import ColorSwatch  from '../../src/components/UiComponents/ColorSwatch.js' 


# Border Radius

Border Radius are defined by default in 8px, 12px is defined for buttons and 16px for layout elements.

  <ThemeProvider theme={jnjTheme}>

        <Stack  direction="row" justifyContent="center" alignItems="center"  spacing={4}>
          <ColorSwatch boxS="3" token="white" hex="Border Radius: 8px" textColor="white" borderR="8px" />
          <ColorSwatch boxS="3" token="white" hex="Border Radius: 12px" textColor="white" borderR="12px" />
          <ColorSwatch boxS="3" token="white" hex="Border Radius: 16px" textColor="white" borderR="16px" />
        </Stack>

        <br/>

        Boder radius in MUI needs to be added using [SX Prop](https://mui.com/system/getting-started/the-sx-prop/).

        ```jsx
            <Box sx={{ borderRadius: '12px'}}>
        ```

  </ThemeProvider>
  <br />

### Figma elevation file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D680-934%26t%3Dm6cycT6dKiE7PWU5-1"
  allowfullscreen
/>

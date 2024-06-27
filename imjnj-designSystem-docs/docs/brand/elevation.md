---
sidebar_position: 6
---

import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ColorSwatch  from '../../src/components/UiComponents/ColorSwatch.js' 

# Elevation

Elevation refers to the level of shadow cast by a component onto the background. This shadow is defined incrementally from 0 to 5. Elevation helps to create a sense of depth and hierarchy in the UI, making components stand out and providing visual cues about their importance and interactivity.

For complete MUI component documentation, see [Elevation](https://mui.com/material-ui/react-paper/#elevation).

## Core colors

        <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
          <ColorSwatch boxS="1" token="white" hex="boxShadow: 1" rgb="elevation{1}" textColor="white" />
          <ColorSwatch boxS="2" token="white" hex="boxShadow: 2" rgb="elevation{2}" textColor="white" />
          <ColorSwatch boxS="3" token="white" hex="boxShadow: 3" rgb="elevation{3}" textColor="white" />
        </Stack>

         <Stack mt={5} direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
          <ColorSwatch boxS="4" token="white" hex="boxShadow: 4" rgb="elevation{4}" textColor="white" />
           <ColorSwatch boxS="5" token="white" hex="boxShadow: 5" rgb="elevation{5}" textColor="white" />
        </Stack>

        <br/> <br/>

        Elevation in MUI needs to be added using [SX Prop](https://mui.com/system/getting-started/the-sx-prop/).

        ```jsx
            <Box sx={{ boxShadow: 2,}}>
        ```
      
  <br />

### Figma elevation file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D680%253A418%26t%3Demyuke5BLQImTXOF-1"
  allowfullscreen
/>

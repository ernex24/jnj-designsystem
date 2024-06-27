---
sidebar_position: 7
---

import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ColorSwatch  from '../../src/components/UiComponents/ColorSwatch.js' 

# Border Radius

Using consistent border radius values helps to create a cohesive and polished look across the UI. Rounded corners can soften the appearance of elements, making the interface more visually appealing and user-friendly. Different border radius values are applied based on the element's purpose and design context:

##### Default (8px): 
Provides a subtle rounding that is versatile and works well for most components, maintaining a clean and modern look.

##### Buttons (12px):
The slightly larger radius makes buttons more prominent and inviting to click, enhancing their visibility and usability.

##### Layout Elements (16px):
The larger radius for layout elements, such as cards or containers, adds a distinct, elegant touch that helps to visually separate these elements from others, emphasizing their importance or functionality.

By strategically using different border radius values, the design system ensures a harmonious and intuitive user experience.

        <Stack  direction="row" justifyContent="center" alignItems="center"  spacing={4}>
          <ColorSwatch boxS="3" token="white" hex="Border Radius: 8px" textColor="white" borderR="8px" />
          <ColorSwatch boxS="3" token="white" hex="Border Radius: 12px" textColor="white" borderR="12px" />
          <ColorSwatch boxS="3" token="white" hex="Border Radius: 16px" textColor="white" borderR="16px" />
        </Stack>

        <br/>

        Boder radius in MUI needs to be added using SX prop, read more about the [SX Prop](https://mui.com/system/getting-started/the-sx-prop/).

        ```jsx
            <Box sx={{ borderRadius: '12px'}}>
        ```
  <br />

### Figma border radius

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D680-935%26t%3Dg4rb1X5z5GqNeJjj-1"
  allowfullscreen
/>

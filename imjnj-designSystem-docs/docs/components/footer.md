---
sidebar_position: 1
---

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BasicTabs from '../../src/components/UiComponents/MenuTabs.js' 
import IMLogoRed from '../../src/theme/logos/JJ_IM_Logo_SingleLine_Red.svg';
import Avatar from '@mui/material/Avatar';
import AvatarImage from '../../src/theme/images/avatarw2.png';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

# Footer

The Footer is a custom component, is highly customizable so you can adapt it to a variety of different use cases.

### Simple Footer

  The footer in it most simple form consist in a pannel with the logo at the left and the posibility to add a menu with text or icons.
  
  <br/>

    <Box 
      component="footer" 
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      justify
      p={'12px'} 
        sx={{  
          width: 1, 
          bgcolor: 'white', 
          borderTop: 1, 
          borderColor: 'divider'
          }}>
      <Stack 
        direction="row"
        alignItems="center"
        spacing={4}>
          <IMLogoRed height='32px'/>
      </Stack>
      <Stack 
        justifyContent="flex-end"
        direction="row"
        alignItems="center"
        spacing={3}>
          <Typography variant="caption">All rigths reserved</Typography>
      </Stack>
    </Box>

  <br />

     ```jsx

  import { JJIMLogoSingleLineRed } from '@jnj_dnds/designsystem/dist/theme/logos'
  import Box from '@mui/material/Box';
  import Stack from '@mui/material/Stack';
  import Typography from '@mui/material/Typography';

   ```  

   ```jsx

     <Box 
      component="footer" 
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      justify
      p={'12px'} 
        sx={{  
          bgcolor: 'white', 
          borderTop: 1, 
          borderColor: 'divider'
          }}>
      <Stack 
        direction="row"
        alignItems="center"
        spacing={4}>
           <img src={JJIMLogoSingleLineRed}height='32px'/>
      </Stack>
      <Stack 
        justifyContent="flex-end"
        direction="row"
        alignItems="center"
        spacing={3}>
          <Typography variant="caption">All rigths reserved</Typography>
      </Stack>
    </Box>

   ```  
  
  <br />

  ### Menu Footer
  
  <br/>

    <Box 
      component="footer" 
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      justify
      p={'12px'} 
        sx={{  
          width: 1, 
          bgcolor: 'white', 
          borderTop: 1, 
          borderColor: 'divider'
          }}>
      <Stack 
        direction="row"
        alignItems="center"
        spacing={4}>
          <IMLogoRed height='32px'/>
          <Link href="#" color="secondary" underline="none">Link 1</Link>
          <Link href="#" color="secondary" underline="none">Link 2</Link>
          <Link href="#" color="secondary" underline="none">Link 3</Link>
      </Stack>
      <Stack 
        justifyContent="flex-end"
        direction="row"
        alignItems="center"
        spacing={3}>
          <Typography variant="caption">All rigths reserved</Typography>
      </Stack>
    </Box>

  <br />

   ```jsx

       <Box 
      component="footer" 
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      justify
      p={'12px'} 
        sx={{  
          width: 1, 
          bgcolor: 'white', 
          borderTop: 1, 
          borderColor: 'divider'
          }}>
      <Stack 
        direction="row"
        alignItems="center"
        spacing={4}>
          <IMLogoRed height='32px'/>
          <Link href="#" color="secondary" underline="none">Link 1</Link>
          <Link href="#" color="secondary" underline="none">Link 2</Link>
          <Link href="#" color="secondary" underline="none">Link 3</Link>
      </Stack>
      <Stack 
        justifyContent="flex-end"
        direction="row"
        alignItems="center"
        spacing={3}>
          <Typography variant="caption">All rigths reserved</Typography>
      </Stack>
    </Box>

   ```  
  
  <br />

### Figma footer file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Fnode-id%3D2100-9754%26t%3D3vke5nSb5ljYhs16-1"
  allowfullscreen
/>











---
sidebar_position: 0
---

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';
import BasicTabs from '../../src/components/UiComponents/MenuTabs.js' 
import IMLogoRed from '../../src/theme/logos/JJ_IM_Logo_SingleLine_Red.svg';
import Avatar from '@mui/material/Avatar';
import AvatarImage from '../../src/theme/images/avatarw2.png';
import Typography from '@mui/material/Typography';

# Header

The header is a custom component from the CSS file, is highly customizable so you can adapt it to a variety of different use cases.

### Simple header

  The header in it most simple form consist in a pannel with the logo at the left and the posibility to add different actions horizontally aligned to the rigth.

  The Avatar component is comming from MUI, explore [Avatar component](https://v5-0-6.mui.com/components/avatars/). 
  
  <br/>
  
  <ThemeProvider theme={jnjTheme}>

    <Box 
      component="header" p={'12px'} m={3} elevation={2}  sx={{  width: 1, boxShadow: 4, borderRadius: '12px', bgcolor: 'white' }}>
      <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}>
          <IMLogoRed height='32px'/>
      <Stack 
        direction="row"
        alignItems="center"
        spacing={3}>
          <Typography variant="bodyM">Jane Doe</Typography>
          <Avatar alt="Remy Sharp" src={AvatarImage} />
        </Stack>
      </Stack>
    </Box>
    
  </ThemeProvider>

  <br />

   ```jsx

    <Box 
      component="header" p={'12px'} m={3} elevation={2}  sx={{  width: 1, boxShadow: 4, borderRadius: '12px', bgcolor: 'white' }}>
      <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}>
          <IMLogoRed height='32px'/>
      <Stack 
        direction="row"
        alignItems="center"
        spacing={3}>
          <Typography variant="bodyM">Jane Doe</Typography>
          <Avatar alt="Remy Sharp" src={AvatarImage} />
        </Stack>
      </Stack>
    </Box>

   ```  


### Header with secondary menu

  This header layout can hold a tab component, to be used as a secondary menu, you need to configure the content of the tab styles to be adjusted to the layout.
  
  <br/>
  
  <ThemeProvider theme={jnjTheme}>

    <Box 
      component="header" pt={'12px'} px={'12px'} pb={0} m={3} elevation={2}  sx={{ width: 1, boxShadow: 4, borderRadius: '12px', bgcolor: 'white' }}>
       <Stack 
        direction="column">
          <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
              <IMLogoRed height='32px'/>
          <Stack
            direction="row"
            alignItems="center"
            spacing={3}>
              <Typography variant="bodyM">Jane Doe</Typography>
              <Avatar alt="Remy Sharp" src={AvatarImage} />
            </Stack>
          </Stack>
           <BasicTabs/> 
       </Stack>
    </Box>

  </ThemeProvider>
  
  <br />

   ```jsx

   <div className="jnj-header-menu">
    <div className="jnj-header-menu-internal">
      <div className="jnj-header-logo">
        <img src={IMLogoRed} alt="JJ Logo"/>
      </div>
      <Button variant="outlined">Test button</Button>
    </div> 
        <BasicTabs/> 
  </div>

   ```  


### Figma header file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Fnode-id%3D2100-9754%26t%3D3vke5nSb5ljYhs16-1"
  allowfullscreen
/>











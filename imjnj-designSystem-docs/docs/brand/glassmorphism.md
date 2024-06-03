---
sidebar_position: 8
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import ColorSwatch  from '../../src/components/UiComponents/ColorSwatch.js' 

import BackGroundBox from '../../src/theme/images/boxes1.png'

# Glassmorphism

Glassmorphism is a custom feature created from the CSS of the Design System to add blur blur to the backgrounds driving the attention of the user to the content above the blurred background.

  <ThemeProvider theme={jnjTheme}>

  #### White glassmorphism

        <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
         
          <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={4}
              sx={{ 
                  backgroundImage:`url(${BackGroundBox})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: 'fixed',
                  borderRadius: '16px',
                  height: '300px',
                  width: '300px' 
                }}>

          <Box className="jnj-glassmorphism-white-s"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              }}
            > <Typography variant="bodySbold" display="block" gutterBottom>.jnj-glassmorphism-white-s</Typography> </Box>
            </Box>

            <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={4}
              sx={{ 
                  backgroundImage:`url(${BackGroundBox})`,
                  backgroundRepeat: "no-repeat",
                     backgroundAttachment: 'fixed',
                  backgroundSize: "cover",
                  borderRadius: '16px',
                  height: '300px',
                  width: '300px' 
                }}>

          <Box className="jnj-glassmorphism-white-m"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              }}
            > <Typography variant="bodySbold" display="block" gutterBottom>.jnj-glassmorphism-white-m</Typography> </Box>
            </Box>

            <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={4}
              sx={{ 
                  backgroundImage:`url(${BackGroundBox})`,
                     backgroundAttachment: 'fixed',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: '16px',
                  height: '300px',
                  width: '300px' 
                }}>

          <Box className="jnj-glassmorphism-white-l"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              }}
            > <Typography variant="bodySbold" display="block" gutterBottom>.jnj-glassmorphism-white-l</Typography> </Box>
            </Box>
        
        </Stack>

        <br/>

        ```jsx
            <Box className="jnj-glassmorphism-white-l" > </Box>
        ```

        <br/>
      
        #### Black glassmorphism

        <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
         
          <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={4}
              sx={{ 
                  backgroundImage:`url(${BackGroundBox})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: 'fixed',
                  borderRadius: '16px',
                  height: '300px',
                  width: '300px' 
                }}>

          <Box className="jnj-glassmorphism-black-s"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              }}
            > <Typography variant="bodySbold" display="block" gutterBottom>.jnj-glassmorphism-white-s</Typography> </Box>
            </Box>

            <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={4}
              sx={{ 
                  backgroundImage:`url(${BackGroundBox})`,
                  backgroundRepeat: "no-repeat",
                     backgroundAttachment: 'fixed',
                  backgroundSize: "cover",
                  borderRadius: '16px',
                  height: '300px',
                  width: '300px' 
                }}>

          <Box className="jnj-glassmorphism-black-m"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              }}
            > <Typography variant="bodySbold" display="block" gutterBottom>.jnj-glassmorphism-white-m</Typography> </Box>
            </Box>

            <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={4}
              sx={{ 
                  backgroundImage:`url(${BackGroundBox})`,
                     backgroundAttachment: 'fixed',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: '16px',
                  height: '300px',
                  width: '300px' 
                }}>

          <Box className="jnj-glassmorphism-black-l"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              }}
            > <Typography variant="bodySbold" display="block" gutterBottom>.jnj-glassmorphism-white-l</Typography> </Box>
            </Box>
        
        </Stack>

        <br/>

        ```jsx
            <Box className="jnj-glassmorphism-black-l" > </Box>
        ```


  </ThemeProvider>
  <br />

### Figma glassmorhpism file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D3143-2139%26t%3Df8OZiYUBiB7yEXnT-1"
  allowfullscreen
/>

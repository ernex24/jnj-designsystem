---
sidebar_position: 0
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import ColorSwatch  from '../../src/components/UiComponents/ColorSwatch.js' 


# Colors

See complete components documentation from [Tokens Colors](https://mui.com/material-ui/customization/color/).

  <ThemeProvider theme={jnjTheme}>

## Core colors

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
    
          <ColorSwatch token="primary.main" hex="#EB1700" rgb="rgba(235, 23, 0, 1)" textColor="white" />
          <ColorSwatch token="secondary.main" hex="#212121" rgb="rgba(255, 255, 255, 1)" textColor="white" />
          <ColorSwatch token="white" hex="#FFFFFF" rgb="rgba(33, 33, 33, 1)" textColor="black" />

        </Stack>


  
## Text colors

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
    

      <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          
           <Typography variant="bodyMbold" sx={{ color: 'text.primary' }} >bodyMbold. Lorem ipsum</Typography>

          ```jsx
          text.primary
          ```
      </Stack>

      <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
            
             <Typography variant="bodyMbold" sx={{ color: 'text.secondary' }}>bodyMbold. Lorem ipsum</Typography>

          ```jsx
          text.secondary
          ```
      </Stack>

      <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          
           <Typography variant="bodyMbold" sx={{ color: 'text.disabled'}}>bodyMbold. Lorem ipsum</Typography>

          ```jsx
          text.disabled
          ```
      </Stack>

    </Stack>



    ### Gray colors

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
      <ColorSwatch token="gray.gray10" hex="#F9F8F7" rgb="rgba(249, 248, 247, 1)" textColor="black" />
      <ColorSwatch token="gray.gray20" hex="#F1EFED" rgb="rgba(241, 239, 237, 1)" textColor="black" />
      <ColorSwatch token="gray.gray30" hex="#E8E6E3" rgb="rgba(232, 230, 227, 1)" textColor="black" />
      <ColorSwatch token="gray.gray40" hex="#D5CFC9" rgb="rgba(213, 207, 201, 1)" textColor="black" />
    </Stack>

 <br/>  
      
    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

 
  <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
      <ColorSwatch token="gray.gray50" hex="#C1BBB3" rgb="rgba(249, 248, 247, 1)" textColor="black" />
      <ColorSwatch token="gray.gray60" hex="#A39992" rgb="rgba(241, 239, 237, 1)" textColor="black" />
      <ColorSwatch token="gray.gray70" hex="#81766F" rgb="rgba(232, 230, 227, 1)" textColor="white" />
      <ColorSwatch token="gray.gray80" hex="#564C47" rgb="rgba(213, 207, 201, 1)" textColor="white" />
    </Stack>
  </Stack>



## Semantic colors

### Warning

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

      <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
        <ColorSwatch token="warning.light" hex="#FDF0E6" rgb="rgba(253, 240, 230, 1)" textColor="black" />
        <ColorSwatch token="warning.main" hex="#F5AC25" rgb="rgba(245, 172, 37, 1)" textColor="black" />
        <ColorSwatch token="warning.dark" hex="#F37820" rgb="rgba(243, 120, 32, 1)" textColor="white" />
    </Stack>

   

        </Stack>



### Success

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

   
      <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
        <ColorSwatch token="success.light" hex="#EAF2EA" rgb="rgba(234, 242, 234, 1)" textColor="black" />
        <ColorSwatch token="success.main" hex="#6EBD44" rgb="rgba(110, 189, 68, 1)" textColor="black" />
        <ColorSwatch token="success.dark" hex="#359942" rgb="rgba(53, 153, 66, 1)" textColor="white" />
    </Stack>

     
    

        </Stack>

  
### Error

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

      <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
        <ColorSwatch token="error.light" hex="#FBEAEA" rgb="rgba(251, 234, 234, 1)" textColor="black" />
        <ColorSwatch token="error.main" hex="#D32F2F" rgb="rgba(211, 47, 47, 1)" textColor="black" />
        <ColorSwatch token="error.dark" hex="#C62828" rgb="rgba(198, 40, 40, 1))" textColor="white" />
      </Stack>

      </Stack>


          
### Info

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
       <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
        <ColorSwatch token="info.light" hex="#EAF9FF" rgb="rgba(230, 243, 250, 1)" textColor="black" />
        <ColorSwatch token="info.main" hex="#00A0DF" rgb="rgba(0, 160, 223, 1)" textColor="black" />
        <ColorSwatch token="info.dark" hex="#1C75BC" rgb="rgba(28, 117, 188, 1)" textColor="white" />
      </Stack>
    </Stack>
                 
## Charts colors

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>
    

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.yellow50',
            boxShadow: 4,
          }}
        />
        ```jsx
        charts.yellow50
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.orange70',
            boxShadow: 4,

          }}
        />
        ```jsx
        charts.orange70
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.red90',
            boxShadow: 4,
          }}
        />
        ```jsx
       charts.red90
        ```
    </Stack>


      <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.purple40',
            boxShadow: 4,
          }}
        />
        ```jsx
       charts.purple40
        ```
    </Stack>


        </Stack>


        <br/>

  
    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.purple50',
            boxShadow: 4,
          }}
        />
        ```jsx
        charts.purple50
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.purple80',
            boxShadow: 4,

          }}
        />
        ```jsx
        charts.purple80
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.blue40',
            boxShadow: 4,
          }}
        />
        ```jsx
       charts.blue40
        ```
    </Stack>


      <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.blue50',
            boxShadow: 4,
          }}
        />
        ```jsx
       charts.blue50
        ```
    </Stack>


        </Stack>


        <br/>

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.blue80',
            boxShadow: 4,
          }}
        />
        ```jsx
        charts.blue80
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.green40',
            boxShadow: 4,

          }}
        />
        ```jsx
        charts.green40
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.green50',
            boxShadow: 4,
          }}
        />
        ```jsx
       charts.green50
        ```
    </Stack>


      <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'charts.green80',
            boxShadow: 4,
          }}
        />
        ```jsx
       charts.green80
        ```
    </Stack>


        </Stack>




        

  </ThemeProvider>
  <br />

### Figma color file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D6%253A9%26mode%3Ddesign%26t%3Dbww5aUSp34iRjiRV-1"
  allowfullscreen
/>

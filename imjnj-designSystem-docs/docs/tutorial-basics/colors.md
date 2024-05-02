---
sidebar_position: 0
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

# Colors

See MUI documentation for [Tokens Colors](https://mui.com/material-ui/customization/color/).

  <ThemeProvider theme={jnjTheme}>

## Core colors

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            boxShadow: 4,
          }}
        />
        ```jsx
        primary.main
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'secondary.main',
            boxShadow: 4,

          }}
        />
        ```jsx
        secondary.main
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'white',
            boxShadow: 4,
          }}
        />
        ```jsx
        white
        ```
    </Stack>

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

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray10',
            boxShadow: 4,
          }}
        />
        ```jsx
        gray.gray10
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray20',
            boxShadow: 4,

          }}
        />
        ```jsx
       gray.gray20
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center" spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray30',
            boxShadow: 4,
          }}
        />
        ```jsx
      gray.gray40
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center" spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray40',
            boxShadow: 4,
          }}
        />
        ```jsx
       gray.gray30
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
            bgcolor: 'gray.gray50',
            boxShadow: 4,
          }}
        />
        ```jsx
        gray.gray50
        ```
    </Stack>

 

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray60',
            boxShadow: 4,

          }}
        />
        ```jsx
        gray.gray60
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center" spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray70',
            boxShadow: 4,
          }}
        />
        ```jsx
       gray.gray70
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center" spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'gray.gray80',
            boxShadow: 4,
          }}
        />
        ```jsx
        gray.gray80
        ```
    </Stack>

        </Stack>



## Semantic colors

### Warning

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'warning.main',
            boxShadow: 4,
          }}
        />
        ```jsx
        warning.main
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'warning.dark',
            boxShadow: 4,

          }}
        />
        ```jsx
        warning.dark
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'warning.light',
            boxShadow: 4,
          }}
        />
        ```jsx
        warning.light
        ```
    </Stack>

        </Stack>



### Success

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'success.main',
            boxShadow: 4,
          }}
        />
        ```jsx
        success.main
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'success.dark',
            boxShadow: 4,

          }}
        />
        ```jsx
        success.dark
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'success.light',
            boxShadow: 4,
          }}
        />
        ```jsx
       success.light
        ```
    </Stack>

        </Stack>

  
### Error

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'error.main',
            boxShadow: 4,
          }}
        />
        ```jsx
        error.main
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'error.dark',
            boxShadow: 4,

          }}
        />
        ```jsx
        error.dark
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'error.light',
            boxShadow: 4,
          }}
        />
        ```jsx
       error.light
        ```
    </Stack>

        </Stack>


          
### Info

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={4}>

    <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'info.main',
            boxShadow: 4,
          }}
        />
        ```jsx
        info.main
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'info.dark',
            boxShadow: 4,

          }}
        />
        ```jsx
        info.dark
        ```
    </Stack>

     <Stack  direction="column" justifyContent="center" alignItems="center"  spacing={4}>
          <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'info.light',
            boxShadow: 4,
          }}
        />
        ```jsx
       info.light
        ```
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

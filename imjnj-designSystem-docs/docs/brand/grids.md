---
sidebar_position: 3
---
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 


# Grids

See complete MUI component documentation from [Grids](https://mui.com/material-ui/react-grid/).


### Import

```jsx

import Grid from '@mui/material/Grid';

```

There are two types of layout: containers and items, grids are divided in 12 colums and there are five grid breakpoints: xs, sm, md, lg, and xl. a single grid can behave diffeent depending of the asigned number of colums in each breakpoint.


  <ThemeProvider theme={jnjTheme}>
 
    ### Container grids

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
        <Grid item xs={8}>
          <div className="jnj-color-background-gray-30">xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div className="jnj-color-background-gray-30">xs=8</div>
        </Grid>
          <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
          <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
          <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
      </Grid>
    </Box>

  <br/><br/>

       ```jsx
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
        <Grid item xs={8}>
          <div className="jnj-color-background-gray-30">xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div className="jnj-color-background-gray-30">xs=8</div>
        </Grid>
          <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
          <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
          <Grid item xs={4}>
          <div className="jnj-color-background-gray-30">xs=4</div>
        </Grid>
      </Grid>


       ```

  </ThemeProvider>


   ### Figma grids file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D653%253A2026%26mode%3Ddesign%26t%3DGux2WSXUdOktEYFd-1"
  allowfullscreen
/>







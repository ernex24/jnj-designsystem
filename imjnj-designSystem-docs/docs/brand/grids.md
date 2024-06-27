---
sidebar_position: 3
---
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 

# Grids

Explore the complete MUI component documentation from [Grids](https://mui.com/material-ui/react-grid/).

### Import

To use the Grid component, import it as follows:

```jsx

import Grid from '@mui/material/Grid';

```

##### Overview
Grids are fluid and consist of containers and items within the internal grid structure. They are divided into 12 columns and support five breakpoints: xs, sm, md, lg, and xl. A single grid can adapt its layout based on the number of columns assigned at each breakpoint.

##### Usage
Grids allow you to create responsive layouts that change dynamically based on the screen size. You can control the spacing between grid items and the margin around the grid using the spacing system.

##### Breakpoints
The breakpoints in the J&J theme are defined as follows:

- xs: 8px
- sm: 600px
- md: 900px
- lg: 1296px
- xl: 1536px

By assigning different column numbers to these breakpoints, you can create versatile and adaptive layouts that look great on any device.

  ### Contained grids 72px margin

    <Box mx={{ xs: 3, md: 5, lg: 10, xl: 10 }}>
      <Grid container   spacing={{ xs: 2, md: 2, lg: 3, xl: 3 }}  columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }} mx={3}>
        <Grid item xs={12}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
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
  <br/>

      ```jsx
    <Box mx={{ xs: 4, md: 5, lg: 10, xl: 10 }}>
      <Grid container   spacing={{ xs: 2, md: 2, lg: 3, xl: 3 }}  columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }} mx={3}>
        <Grid item xs={12}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
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
      ```

 
    ### Fluid grids full screen

      <Box mx={{ xs: 4, md: 5, lg: 5, xl: 5 }}>
      <Grid container spacing={{ xs: 2, md: 2, lg: 3, xl: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }} mx={3}>
        <Grid item xs={12}>
          <div className="jnj-color-background-gray-30">xs=12</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
        </Grid>
           <Grid item xs={1}>
          <div className="jnj-color-background-gray-30">xs=1</div>
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
 
  <br/>

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

   ### Figma grids file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D653%253A2026%26mode%3Ddesign%26t%3DGux2WSXUdOktEYFd-1"
  allowfullscreen
/>







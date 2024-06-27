---
sidebar_position: 8
---

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import BasicTabs from '../../src/components/UiComponents/CustomTabs.js' 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

# Cards

Cards are a layout component, to delimit the space of a feature, to build cards we must use a component called box and to add elements as spacing and direction inside of the cards we must use a component called stack.

        <Box sx={{ 
          boxShadow: 2,
          borderRadius: 2,
          padding: 4
          }}>
          <Stack spacing={3}>
            <Typography variant="h3" display="block" gutterBottom>  Title </Typography>
            <Typography variant="bodyM" display="block" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <BasicTabs/> 
            <Stack spacing={3} direction="row" justifyContent="flex-end">
              <Button variant="text">Test button</Button>
              <Button variant="outlined">Test button</Button>
              <Button variant="contained">Test button</Button>
          
            </Stack>
          </Stack>
         </Box>

        <br/> <br/>

        ```jsx
            <Box sx={{ 
          boxShadow: 2,
          borderRadius: 3,
          padding: 4
          }}>
          <Stack spacing={3}>
            ...
            <Stack spacing={3} direction="row" justifyContent="flex-end">
            ...
            </Stack>
          </Stack>
         </Box>
        ```
  <br />



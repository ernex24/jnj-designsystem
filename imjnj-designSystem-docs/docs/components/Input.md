---
sidebar_position: 7
---
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';

# Inputs

See complete components documentation from [MUI Input](https://mui.com/material-ui/react-checkbox/).

 <ThemeProvider theme={jnjTheme}>

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <FormControl variant="standard">
            <InputLabel shrink sx={{ mt: -4 }} >Size</InputLabel>
            <InputBase size='small' placeholder="Small"/>
        </FormControl>

        <FormControl variant="standard">
            <InputLabel shrink sx={{ mt: -4 }}>Size</InputLabel>
            <InputBase size='medium' placeholder="Medium"/>
        </FormControl>

        <FormControl variant="standard">
            <InputLabel shrink sx={{ mt: -4 }}>Size</InputLabel>
            <InputBase size='large' placeholder="Large"/>
        </FormControl>

    </Stack>
  <br/>
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>


        <FormControl disabled variant="standard">
                <InputLabel shrink sx={{ mt: -4 }}>Status</InputLabel>
                <InputBase size='medium' placeholder="Disabled"/>
        </FormControl>

        <FormControl error variant="standard">
            <InputLabel shrink sx={{ mt: -4 }}>Status</InputLabel>
            <InputBase size='medium' placeholder="Error"/>
        </FormControl>

    


    </Stack>

 </ThemeProvider>

### Import

```jsx

import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';


<FormControl variant="standard">
    <InputLabel shrink sx={{ mt: -4 }}>Label</InputLabel>
    <InputBase size='small' placeholder="Enter text"/>
</FormControl>

```


    
---
sidebar_position: 7
---
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';
import { InputBase, FormControl, InputLabel, FormHelperText, InputAdornment } from '@mui/material';

import { SearchSm } from "../../src/theme/icons-react/build/cjs/Index.js";

# Inputs

See complete components documentation from [MUI Input](https://mui.com/material-ui/react-checkbox/).

 <ThemeProvider theme={jnjTheme}>

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <FormControl variant="standard">
            <InputLabel shrink >Size</InputLabel>
            <InputBase size='small' placeholder="Small" fullWidth />
            <FormHelperText>Helper text for small input</FormHelperText>
        </FormControl>

        <FormControl variant="standard">
            <InputLabel shrink >Size</InputLabel>
            <InputBase size='medium' placeholder="Medium" fullWidth />
            <FormHelperText>Helper text for medium input</FormHelperText>
        </FormControl>

        <FormControl variant="standard">
            <InputLabel shrink >Size</InputLabel>
            <InputBase size='large' placeholder="Large" fullWidth />
            <FormHelperText>Helper text for large input</FormHelperText>
        </FormControl>

    </Stack>
  <br/>
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>

        <FormControl disabled variant="standard">
                <InputLabel shrink >Status</InputLabel>
                <InputBase  fullWidth size='medium' placeholder="Disabled" fullWidth />
                <FormHelperText>Helper text for input</FormHelperText>
        </FormControl>

        <FormControl error variant="standard">
            <InputLabel shrink>Status</InputLabel>
            <InputBase size='medium' placeholder="Error" fullWidth />
            <FormHelperText>Helper text for input</FormHelperText>
        </FormControl>

    </Stack>



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

### Inputs with icons

  <br/>  <br/>
   <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>

        <FormControl variant="standard">
                <InputLabel shrink>Status</InputLabel>
                <InputBase 
                    size='medium' 
                    placeholder="Disabled" 
                    endAdornment={
                    <InputAdornment position="end">
                      <SearchSm/>
                    </InputAdornment>
                    } 
                   />
                <FormHelperText>Helper text for disabled input</FormHelperText>
        </FormControl>

        <FormControl variant="standard">
            <InputLabel shrink >Leading Icon</InputLabel>
            <InputBase 
                size='medium'
                placeholder="Search"
                startAdornment={
                    <InputAdornment position="start">
                      <SearchSm/>
                    </InputAdornment>
          } />
            <FormHelperText>Helper text for leading icon input</FormHelperText>
        </FormControl>

    </Stack>

 </ThemeProvider>
    
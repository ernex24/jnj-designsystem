---
sidebar_position: 7
---
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { InputBase, FormControl, InputLabel, FormHelperText, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import { SearchSm } from "../../src/theme/icons-react/build/cjs/index.js";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 

# Inputs

See complete components documentation from [MUI Input](https://mui.com/material-ui/react-checkbox/).

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
       
        <TextField 
            InputLabelProps={{ shrink: true }} 
            placeholder='Small' label="Size" 
            variant="outlined"  
            size="small"
        />
        
        <TextField 
            InputLabelProps={{ shrink: true }} 
            placeholder='Medium' label="Size" 
            variant="outlined" 
            size="medium" 
        />
        
        <TextField 
            InputLabelProps={{ shrink: true }} 
            placeholder='Large' 
            label="Size" 
            variant="outlined" 
            size="large" 
        />

    </Stack>

  <br/>

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        
        <TextField 
            disabled 
            InputLabelProps={{ shrink: true }} 
            placeholder='Disabled' 
            label="Status" 
            variant="outlined" 
            size="medium" 
        />

        <TextField 
            error 
            InputLabelProps={{ shrink: true }} 
            placeholder='Error' 
            label="Status" 
            variant="outlined" 
            size="medium" 
            helperText="Please enter your name"
        />
    </Stack >

### Import

```jsx

    import TextField from '@mui/material/TextField';

     <TextField 
        placeholder='Small' 
        label="Size" 
        variant="outlined"  
        size="small"
        InputLabelProps={{ shrink: true }} 
       />

     <TextField 
        placeholder='Medium' 
        label="Size" 
        variant="outlined" 
        size="medium" 
        InputLabelProps={{ shrink: true }} 
     />
    
     <TextField 
        placeholder='Large'
        label="Size"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
     />

```

### Inputs with icons

  <br/>  <br/>
   <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>


     <TextField 
        placeholder='Start'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            startAdornment: <InputAdornment position="start"><SearchSm/></InputAdornment>,
          }}
     />

    <TextField 
        placeholder='End'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            endAdornment: <InputAdornment position="end"><SearchSm/></InputAdornment>,
          }}
     />

    </Stack>
    
  <br/>  <br/>

    ```jsx

import { InputAdornment } from '@mui/material';
 
    <TextField 
        placeholder='Start'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            startAdornment: <InputAdornment position="start"><Icon/></InputAdornment>,
        }}
    />

    <TextField 
        placeholder='End'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            endAdornment: <InputAdornment position="end"><Icon/></InputAdornment>,
          }}
    />

```

### Inputs with formats

  <br/>  <br/>
   <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <TextField 
        placeholder='Start'
        label="Icon"
        variant="outlined"
        size="large"
        helperText="Please enter your name"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
    />

    <TextField 
        placeholder='End'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
        helperText="Please enter your name"
         InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
    />

    </Stack>
    
  <br/>  <br/>

    ```jsx

import { InputAdornment } from '@mui/material';
 
    <TextField 
        placeholder='Start'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            startAdornment: <InputAdornment position="start"><Icon/></InputAdornment>,
          }}
    />

    <TextField 
        placeholder='End'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            endAdornment: <InputAdornment position="end"><Icon/></InputAdornment>,
          }}
    />

```


### Selectors

   <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
        <TextField 
            select
            fullWidth
            placeholder='Select'
            label="Icon"
            variant="outlined"
            size="medium"
            defaultValue="000"
            InputProps={{ startAdornment: <InputAdornment position="start">€</InputAdornment> }}
            InputLabelProps={{ shrink: true }} 
            >
                <MenuItem value="100"> 100 </MenuItem>
                <MenuItem value="200"> 200 </MenuItem>
                <MenuItem value="300"> 300 </MenuItem>
                <MenuItem value="400"> 400 </MenuItem>
        </TextField>
    </Stack>
    
  <br/>  <br/>

    ```jsx

import { InputAdornment } from '@mui/material';
 
    <TextField 
        placeholder='Start'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            startAdornment: <InputAdornment position="start"><Icon/></InputAdornment>,
          }}
    />

    <TextField 
        placeholder='End'
        label="Icon"
        variant="outlined"
        size="large"
        InputLabelProps={{ shrink: true }} 
         InputProps={{
            endAdornment: <InputAdornment position="end"><Icon/></InputAdornment>,
          }}
    />

```

    
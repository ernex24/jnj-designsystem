---
sidebar_position: 7
---

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import top100Films from '../../src/components/UiComponents/data.js' 
import { ChevronDown } from "../../src/theme/icons-react/build/cjs/index.js";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


# Autocomplete

See complete components documentation from [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/).


### Basic autocomplete 

<Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={4}>
  
     <Autocomplete
        popupIcon={<ChevronDown />}
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Single Movie"
            placeholder="Select movie"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

        <Autocomplete
        multiple
        popupIcon={<ChevronDown />}
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Many Movies"
            placeholder="Select movie"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

</Stack>


<br/>

### Import

```jsx


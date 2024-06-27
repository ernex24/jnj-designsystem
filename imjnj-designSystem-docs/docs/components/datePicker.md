---
sidebar_position: 7
---
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { InputBase, FormControl, InputLabel, FormHelperText, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import { Calendar } from "../../src/theme/icons-react/build/cjs/index.js";
import { ChevronDown } from "../../src/theme/icons-react/build/cjs/index.js";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs from 'dayjs';

# Date Picker
See complete components documentation from [MUI Date Pickers](https://mui.com/x/react-date-pickers/getting-started/).

### Import

```jsx
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
```

<br/> <br/>

#### Single date picker
Select a single day based on month or year

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slots={{ 
              openPickerIcon: Calendar,
              switchViewIcon: ChevronDown
            }}/>
        </LocalizationProvider>
    </Stack>

  <br/>


  #### Date range
  Select a number of consecutive dates

  ### Import

```jsx
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
```


  <br/>   <br/>

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker localeText={{ start: 'From', end: 'To' }} />
        </LocalizationProvider>
    </Stack>

  <br/>   <br/>
  
  #### Date range calendar
  Select a range with the view of the calendar

  <br/>   <br/>

  ```jsx
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
```
  
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateRangeCalendar/>
        </LocalizationProvider>
    </Stack>




    
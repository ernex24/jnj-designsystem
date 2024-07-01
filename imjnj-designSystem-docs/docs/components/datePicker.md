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

npm install @mui/x-date-pickers
// Install date library (if not already installed)
npm install dayjs

```

```jsx

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Calendar, ChevronDown  } from "@jnj_dnds/designsystem/dist/theme/icons-react/";

```

<br/>

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

  ```jsx
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        slots={{ 
          openPickerIcon: Calendar,
          switchViewIcon: ChevronDown
        }}/>
    </LocalizationProvider>
```

  #### Date range
  Select a number of consecutive dates

  ### Import

```jsx
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Calendar, ChevronDown  } from "@jnj_dnds/designsystem/dist/theme/icons-react/";
```


  <br/> 

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker localeText={{ start: 'From', end: 'To' }} />
        </LocalizationProvider>
    </Stack>

  <br/> 

  ```jsx
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker localeText={{ start: 'From', end: 'To' }} />
        </LocalizationProvider>
```
  
  #### Date range calendar
  Select a range with the view of the calendar

  <br/>   <br/>

  ```jsx
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
```
  
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateRangeCalendar/>
        </LocalizationProvider>
    </Stack>

    ```jsx
        <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateRangeCalendar/>
        </LocalizationProvider>
```




      ### Figma file date picker

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Fnode-id%3D537-6939%26t%3DJ1rMFShqEzdn1bhu-1"
  allowfullscreen
/> 
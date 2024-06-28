---
sidebar_position: 5
---
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';

# Radio group

See complete components documentation from [MUI Checkbox](https://mui.com/material-ui/react-checkbox/).

### Import

```jsx

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

```

### Primary radio group

    <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
       <FormHelperText error><Typography color="error" variant="caption" >This is an error</Typography></FormHelperText>
    </FormControl>
    </Stack>

  <br />  <br />

  ```jsx

        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

```

### Secondary radio group

    <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio color="secondary" />} label="Female" />
        <FormControlLabel value="male" control={<Radio color="secondary" />} label="Male" />
        <FormControlLabel value="other" control={<Radio color="secondary" />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Stack>

  <br />
  ```jsx

      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio color="secondary" />} label="Female" />
        <FormControlLabel value="male" control={<Radio color="secondary" />} label="Male" />
        <FormControlLabel value="other" control={<Radio color="secondary" />} label="Other" />
      </RadioGroup>
    </FormControl>

  ```


  ### Radio group direcction


    <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
    </Stack>

  <br />
  ```jsx

     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>

  ```

### Radio group size

 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
   <Radio label="Label" defaultChecked size="small" />
   <Radio label="Label" size="medium" />
   <Radio label="Label" size="large" />
  </Stack>

  <br />
  ```jsx

      <Radio label="Label" defaultChecked size="small" />
      <Radio label="Label" size="medium" />
      <Radio label="Label" size="large" />

  ```

   ### Figma radio group

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D2042%253A9352%26mode%3Ddesign%26t%3DmBe82g2TXO808QGP-1" 
  allowfullscreen
/>







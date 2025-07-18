---
sidebar_position: 3
---
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

# Checkbox

See complete components documentation from [MUI Checkbox](https://mui.com/material-ui/react-checkbox/).

### Import

```jsx

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';

```

### Primary checkbox

    <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    </Stack>

  <br />  <br />

  ```jsx

    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>

```

### Secondary checkbox

    <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <FormGroup>
      <FormControlLabel  control={<Checkbox color="secondary" defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox color="secondary" />} label="Required" />
      <FormControlLabel disabled control={<Checkbox color="secondary" />} label="Disabled" />
    </FormGroup>
    </Stack>

  <br />
  ```jsx

      <FormControlLabel  control={<Checkbox color="secondary" defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox color="secondary" />} label="Required" />
      <FormControlLabel disabled control={<Checkbox color="secondary" />} label="Disabled" />

  ```

### Checkbox size

 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
   <Checkbox label="Label" defaultChecked size="small" />
   <Checkbox label="Label"defaultChecked size="medium" />
   <Checkbox label="Label" defaultChecked size="large" />
</Stack>

  <br />
  ```jsx

      <Button size="small" color="primary" variant="contained">Contained</Button>
      <Button size="medium" color="primary" variant="contained">Contained</Button>
      <Button size="large" color="primary" variant="contained">Contained</Button>

  ```

  ### Checkbox form

 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
   <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          <FormHelperText error><Typography color="error" variant="caption" >This is an error</Typography></FormHelperText>
          </FormGroup>
        </FormControl>
  </Stack>

  <br />
  ```jsx

      <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          <FormHelperText error>
          <Typography color="error" variant="caption" >This is an error</Typography>
          </FormHelperText>
          </FormGroup>
        </FormControl>

  ```

   ### Figma checkbox

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D663%253A6695%26mode%3Ddesign%26t%3DaauGeEtkawvO4h6l-1"
  allowfullscreen
/>







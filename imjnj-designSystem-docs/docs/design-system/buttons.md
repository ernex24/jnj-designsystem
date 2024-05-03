---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

# Buttons

<Tabs>
  <TabItem value="Codebase" label="Codebase" default>
<br/>

See complete components documentation from [MUI Buttons](https://mui.com/material-ui/react-button/).


### Import

```jsx

  import Button from '@mui/material/Button';

```

### Primary buttons

  <ThemeProvider theme={jnjTheme}>
  <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  </ThemeProvider>
  <br />
  ```jsx

   <Button variant="text">Text</Button>
   <Button variant="contained">Contained</Button>
   <Button variant="outlined">Outlined</Button>

```

### Secondary buttons

  <ThemeProvider theme={jnjTheme}>
 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <Button color="secondary" variant="text">Text</Button>
      <Button color="secondary" variant="contained">Contained</Button>
      <Button color="secondary" variant="outlined">Outlined</Button>
    </Stack>
    </ThemeProvider>

  <br />
  ```jsx

     <Button color="secondary" variant="text">Text</Button>
     <Button color="secondary" variant="contained">Contained</Button>
     <Button color="secondary" variant="outlined">Outlined</Button>

  ```

### Buttons size

  <ThemeProvider theme={jnjTheme}>
 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <Button size="small" color="primary" variant="contained">Contained</Button>
      <Button size="medium" color="primary" variant="contained">Contained</Button>
      <Button size="large" color="primary" variant="contained">Contained</Button>
  </Stack>
    </ThemeProvider>

  <br />
  ```jsx

      <Button size="small" color="primary" variant="contained">Contained</Button>
      <Button size="medium" color="primary" variant="contained">Contained</Button>
      <Button size="large" color="primary" variant="contained">Contained</Button>

  ```

   ### Figma buttons file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D4702%253A74217%26mode%3Ddesign%26t%3DaauGeEtkawvO4h6l-1"
  allowfullscreen
/>


  </TabItem>
  <TabItem value="UserExperience" label="User Experience">


  </TabItem>
</Tabs>









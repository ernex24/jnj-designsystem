---
sidebar_position: 3
---
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Icon from '@mui/material/Icon';
import * as Icons from "../../src/theme/icons-react/build/cjs/Index.js";

import IconsDataTable from '../../src/components/UiComponents/IconsTable.js'

# Icons

Icons are .svg files used as react components, in this way they can innerith properties, read more on how to [include icons as react components](https://mui.com/material-ui/icons/#svgicon).

Import the icons to be used as react components:

```jsx

// Import the icon
import { IconName } from "@imjnj/tokens/dist/icons-react";

//Import the icon component from MUI to apply the theme
import Icon from '@mui/material/Icon';

// Apply the color spacing and size from MUI Design Tokens
<Icon component={IconName} color='primary' fontSize='large'>
```


  <ThemeProvider theme={jnjTheme}>

  <br/>

  <IconsDataTable/>

  <br/>

  </ThemeProvider>


   ### Figma icons file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRH8mnfTNHpsFi9yj8Y29w0%2FIcons-%2526-Illustrations--J%2526J-v1.1.0%3Fnode-id%3D168-952%26t%3DVLpq6MjHwtlmB8Mh-1"
  allowfullscreen
/>
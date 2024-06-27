---
sidebar_position: 3
---
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Icon from '@mui/material/Icon';
import * as Icons from "../../src/theme/icons-react/build/cjs/index.js";

import IconsDataTable from '../../src/components/UiComponents/IconsTable.js'

# Icons

These icons are already React components and can dynamically receive all properties from the theme, such as color, size, etc. If you need to include a new icon, it is recommended to do so as a React component. For more information, refer to the MUI documentation on [include icons as react components](https://mui.com/material-ui/icons/#svgicon).

### Import

```jsx

// Import the icon
import { IconName } from "@imjnj/tokens/dist/icons-react";

//Import the icon component from MUI to apply the theme
import Icon from '@mui/material/Icon';

// Apply the color spacing and size from MUI Design Tokens
<Icon component={IconName} color='primary' fontSize='large'>
```

  <br/>

  <IconsDataTable/>

  <br/>

   ### Figma icons file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRH8mnfTNHpsFi9yj8Y29w0%2FIcons-%2526-Illustrations--J%2526J-v1.1.0%3Fnode-id%3D168-952%26t%3DVLpq6MjHwtlmB8Mh-1"
  allowfullscreen
/>
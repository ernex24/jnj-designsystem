---
sidebar_position: 8
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import BasicTable from '../../src/components/UiComponents/Table.js' 


# Tables

<br/>

See complete components documentation from [MUI Table](https://mui.com/material-ui/react-table/).

### Data grid

:::info

Datagrid is an extention of the MUI data table and needs to be installed separatedly in a different package, [read more here ](https://mui.com/x/react-data-grid/).

:::

### Import

```bash

npm install @mui/x-data-grid

```

```jsx

import { DataGrid } from '@mui/x-data-grid';

```

  <ThemeProvider theme={jnjTheme}>
  <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
       <BasicTable />
    </Stack>
  </ThemeProvider>
  <br />


  ```jsx jsx title="table.jsx"

<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

```

   ### Figma file table

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D481%253A8217%26mode%3Ddesign%26t%3D1FfQQZ1voLD67woU-1"
  allowfullscreen
/>











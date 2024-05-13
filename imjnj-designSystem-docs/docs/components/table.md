---
sidebar_position: 8
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';

import DataGrid from '../../src/components/UiComponents/DataGrid.js' 
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
       <DataGrid />
    </Stack>
  </ThemeProvider>
  <br />


  ```jsx jsx title="DataGrid.jsx"

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



### Basic tables

```jsx

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

```

<ThemeProvider theme={jnjTheme}>
  <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
       <BasicTable />
    </Stack>
  </ThemeProvider>
  <br />


  ```jsx jsx title="Table.jsx"

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

```

   ### Figma file tables

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D2105%253A9504%26mode%3Ddesign%26t%3DHNdC7PQtwj5NvqGt-1"
  allowFullScreen
/>











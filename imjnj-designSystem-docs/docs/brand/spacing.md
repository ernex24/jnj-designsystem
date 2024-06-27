---
sidebar_position: 4
---
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

# Spacing System

 The spacing system is based on multiples of 8px and can be used for margins, paddings, gaps, etc. The spacing values are stored in an array, and you need to reference the array position to get the correct number. The available spacing values are:

 ```jsx
[0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176]
```

See complete MUI component documentation from [Spacing](https://mui.com/system/spacing/) and setting [margins and paddings](https://mui.com/system/getting-started/the-sx-prop/#spacing).

  <br/>

  <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"> Number </TableCell>
            <TableCell align="center">Space</TableCell>
            <TableCell align="leftr">Example</TableCell>
            <TableCell align="right">Use</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow >
              <TableCell align="center"> 0 </TableCell>
              <TableCell align="center"> 0 </TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="right">Remove space</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 1 </TableCell>
              <TableCell align="center"> 2px </TableCell>
              <TableCell align="center"> <Box height={16} width={2} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Small spaces between numbers or text</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 2 </TableCell>
              <TableCell align="center"> 4px </TableCell>
              <TableCell align="center"> <Box height={16} width={4} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Small spaces between numbers or text</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 3 </TableCell>
              <TableCell align="center"> 8px </TableCell>
              <TableCell align="center"> <Box height={16} width={8} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Small spaces between components</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 4 </TableCell>
              <TableCell align="center"> 16px </TableCell>
              <TableCell align="center"> <Box height={16} width={16} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces between or inside components and layout</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 6 </TableCell>
              <TableCell align="center"> 24px </TableCell>
              <TableCell align="center"> <Box height={16} width={24} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces between or inside components and layout</TableCell>
            </TableRow>

             <TableRow >
              <TableCell align="center"> 7 </TableCell>
              <TableCell align="center"> 32px </TableCell>
              <TableCell align="center"> <Box height={16} width={32} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces between or inside components and layout</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 8 </TableCell>
              <TableCell align="center"> 40px </TableCell>
              <TableCell align="center"> <Box height={16} width={40} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces for layout</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 9 </TableCell>
              <TableCell align="center"> 48px </TableCell>
              <TableCell align="center"> <Box height={16} width={48} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces for layout</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 10 </TableCell>
              <TableCell align="center"> 56px </TableCell>
              <TableCell align="center"> <Box height={16} width={56} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces for layout</TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center"> 11 </TableCell>
              <TableCell align="center"> 64px </TableCell>
              <TableCell align="center"> <Box height={16} width={64} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces for layout</TableCell>
            </TableRow>

             <TableRow >
              <TableCell align="center"> 12 </TableCell>
              <TableCell align="center"> 72px </TableCell>
              <TableCell align="center"> <Box height={16} width={72} display="flex" alignItems="center" sx={{ bgcolor: 'primary.main' }} ></Box> </TableCell>
              <TableCell align="right">Spaces for layout</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>

  <br/>

   ### Figma spacing file

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D653%253A3293%26t%3DBjY6J4VnCOvKhTEY-1"
  allowfullscreen
/>
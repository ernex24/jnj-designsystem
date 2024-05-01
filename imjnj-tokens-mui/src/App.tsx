import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';


import jnjTheme from '@imjnj/tokens/dist/jnj-theme';
// import jnjTheme from './theme/jnj-theme';
// import jnjTheme from '../dist/assets/index-DEVG9bsc.js';

function App() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>

      <Container>
        <Grid container spacing={2}>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.primary.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.primary.contrastText} gutterBottom>Color Primary Light</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.primary.main
              }
            } >   <Typography variant="bodyM" color={jnjTheme.palette.primary.contrastText} gutterBottom>Color Primary Main</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.primary.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.primary.contrastText} gutterBottom>Color Primary Light</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.secondary.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.primary.contrastText} gutterBottom>Color Secondary Light</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.secondary.main
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.primary.contrastText} gutterBottom>Color Secondary Main</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.secondary.dark
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.primary.contrastText} gutterBottom>Color Secondary Dark</Typography>
            </div>
          </Grid>


          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.warning.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.warning.contrastText} gutterBottom>Color warning light</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.warning.main
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.warning.contrastText} gutterBottom>Color warning main</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.warning.dark
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.warning.contrastText} gutterBottom>Color warning Dark</Typography>
            </div>
          </Grid>



          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.success.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.success.contrastText} gutterBottom>Color success light</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.success.main
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.success.contrastText} gutterBottom>Color success main</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.success.dark
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.success.contrastText} gutterBottom>Color success dark</Typography>
            </div>
          </Grid>




          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.info.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.info.contrastText} gutterBottom>Color info light</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.info.main
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.info.contrastText} gutterBottom>Color info main</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.info.dark
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.info.contrastText} gutterBottom>Color info dark</Typography>
            </div>
          </Grid>


          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.error.light
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color error dark</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.error.main
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color error dark</Typography>
            </div>
          </Grid>


          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.error.dark
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color error dark</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray10
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray10</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray20
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray20</Typography>
            </div>
          </Grid>


          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray30
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray30</Typography>
            </div>
          </Grid>


          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray40
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray40</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray50
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray50</Typography>
            </div>
          </Grid>


          <Grid item xs={4}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray60
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray60</Typography>
            </div>
          </Grid>


          <Grid item xs={6}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray70
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray70</Typography>
            </div>
          </Grid>



          <Grid item xs={6}>
            <div style={
              {
                margin: jnjTheme.spacing(1),
                padding: jnjTheme.spacing(4),
                backgroundColor: jnjTheme.palette.gray.gray80
              }
            } > <Typography variant="bodyM" color={jnjTheme.palette.error.contrastText} gutterBottom>Color gray80</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h1" gutterBottom>h1. Lorem ipsum</Typography>
            <Typography variant="h2" gutterBottom>h2. Lorem ipsum</Typography>
            <Typography variant="h3" gutterBottom>h3. Lorem ipsum</Typography>
            <Typography variant="h4" gutterBottom>h4. Lorem ipsum</Typography>
            <Typography variant="h5" gutterBottom>h5. Lorem ipsum</Typography>
            <Typography variant="h6" gutterBottom>h6. Lorem ipsum</Typography>
            <Typography variant="subtitle1" gutterBottom>subtitle1. Lorem ipsum</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="bodyS" display="block" gutterBottom>bodyS. Lorem ipsum</Typography>
            <Typography variant="bodySmed" display="block" gutterBottom>bodySmed. Lorem ipsum</Typography>
            <Typography variant="bodySbold" display="block" gutterBottom>bodySbold. Lorem ipsum</Typography>
            <Typography variant="bodyM" display="block" gutterBottom>bodyM. Lorem ipsum</Typography>
            <Typography variant="bodyMmed" display="block" gutterBottom>bodyMmed. Lorem ipsum</Typography>
            <Typography variant="bodyMbold" display="block" gutterBottom>bodyMbold. Lorem ipsum</Typography>
            <Typography variant="bodyL" display="block" gutterBottom>bodyL. Lorem ipsum</Typography>
            <Typography variant="bodyLmed" display="block" gutterBottom>bodyLmed. Lorem ipsum</Typography>
            <Typography variant="bodyLbold" display="block" gutterBottom>bodyLbold. Lorem ipsum</Typography>
          </Grid>


          <Grid item xs={4}>
            <Typography variant="eyebrow" display="block" gutterBottom>Eyebrow. Lorem ipsum</Typography>
            <Typography variant="button" display="block" gutterBottom>button. Lorem ipsum</Typography>
            <Typography variant="caption" display="block" gutterBottom>caption. Lorem ipsum</Typography>
          </Grid>

        </Grid>

        <Button variant="contained" disabled>Contained</Button>
        <Button variant="contained" size="small">Contained</Button>
        <Button variant="contained" size="medium">Contained</Button>
        <Button variant="contained" size="large">Contained</Button>

        <Button variant="contained" color="secondary" disabled>Contained</Button>
        <Button variant="contained" color="secondary" size="small">Contained</Button>
        <Button variant="contained" color="secondary" size="medium">Contained</Button>
        <Button variant="contained" color="secondary" size="large">Contained</Button>

        <Button variant="outlined" size="small" disabled>Outlined</Button>
        <Button variant="outlined" size="small">Outlined</Button>
        <Button variant="outlined" size="medium">Outlined</Button>
        <Button variant="outlined" size="large">Outlined</Button>

        <Button variant="outlined" color="secondary" size="small" disabled>Outlined</Button>
        <Button variant="outlined" color="secondary" size="small">Outlined</Button>
        <Button variant="outlined" color="secondary" size="medium">Outlined</Button>
        <Button variant="outlined" color="secondary" size="large">Outlined</Button>

        <Button variant="text" size="small" disabled>Text</Button>
        <Button variant="text" size="small">Text</Button>
        <Button variant="text" size="medium">Text</Button>
        <Button variant="text" size="large">Text</Button>


        <Button variant="text" color="secondary" size="small" disabled>Text</Button>
        <Button variant="text" color="secondary" size="small">Text</Button>
        <Button variant="text" color="secondary" size="medium">Text</Button>
        <Button variant="text" color="secondary" size="large">Text</Button>

        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <FormControl   required  >
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
          <FormControlLabel required control={<Checkbox />} label="Option 2" />
          <FormControlLabel disabled control={<Checkbox />} label="Option 3" />
          <FormHelperText error>You can display an error</FormHelperText>
        </FormGroup>
        </FormControl>

        <Checkbox {...label} defaultChecked  />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />

        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked size="medium" />
        <Checkbox {...label} defaultChecked size="large" />

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

      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

      </Container>
    </>
  )
}

export default App

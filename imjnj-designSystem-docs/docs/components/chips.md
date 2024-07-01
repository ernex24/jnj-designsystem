---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { XClose, Check } from "../../src/theme/icons-react/build/cjs/index.js";
import {handleClick, handleDelete} from '../../src/components/UiComponents/handle.js' 
import Icon from '@mui/material/Icon';

# Chips

<Tabs>
  <TabItem value="Codebase" label="Codebase" default>

Explore documentation from [Chips](https://mui.com/material-ui/react-chip).

<br/>

##### Import
<br/>
```jsx

 import Chip from '@mui/material/Chip';
 import Icon from '@mui/material/Icon';
 import { XClose, Check } from "@jnj_dnds/designsystem/dist/theme/icons-react/";

```
<br/>
### Chips default
<br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="default"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="default"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
      color="default"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

      ```jsx

      <Chip 
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={'handleClick'}
        onDelete={'handleDelete'}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    ```

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

      ```jsx

      <Chip 
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={'handleClick'}
        onDelete={'handleDelete'}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

    ```

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>


      ```jsx
     <Chip 
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={'handleClick'}
      onDelete={'handleDelete'}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

    ```

  <br />

### Chips color success
<br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="success"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="success"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
     color="success"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
       color="success"
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
       color="success"
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      color="success"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
     color="success"
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
     color="success"
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
      color="success"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>

  <br />
  
  ### Chips color warning
  <br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="warning"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="warning"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
     color="warning"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
       color="warning"
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
       color="warning"
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      color="warning"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
       color="warning"
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
       color="warning"
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
        color="warning"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>

  <br />


  ### Chips color error
  <br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="error"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="error"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
     color="error"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
       color="error"
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
       color="error"
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      color="error"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
       color="error"
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
       color="error"
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
        color="error"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>

  <br />

  ### Chips color info
  <br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="info"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="info"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
     color="info"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
       color="info"
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
       color="info"
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      color="info"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
       color="info"
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
       color="info"
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
        color="info"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>

  <br />

  ### Chips color Primary
  <br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="primary"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="primary"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
     color="primary"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
       color="primary"
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
       color="primary"
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      color="primary"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
       color="primary"
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
       color="primary"
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
        color="primary"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>

  <br />

    ### Chips color Secondary
  <br/>

  <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>
   
      <Chip 
        color="secondary"
        label="Chip Outlined Trailing Icon" 
        variant="outlined" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip 
       color="secondary"
        label="Chip Outlined" 
        variant="outlined" 
        size="small"
      />

    <Chip 
     color="secondary"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Outlined Leading Icon" 
      variant="outlined" 
      size="small" 
    />

    </Stack>

    <Stack m={4} direction="row" justifyContent="center" alignItems="center" spacing={4}>

      <Chip 
       color="secondary"
        label="Chip Filled Trailing Icon" 
        variant="filled" 
        size="small" 
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Icon component={XClose} color='secondary'/>}
      />

      <Chip
       color="secondary"
        label="Chip Filled" 
        variant="filled" 
        size="small" 
      />

      <Chip 
      color="secondary"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip Filled Leading Icon" 
      variant="filled" 
      size="small" 
    />

  </Stack>

  <Stack m={4}  direction="row" justifyContent="center" alignItems="center" spacing={4}>

    <Chip 
       color="secondary"
      label="Chip filled-light Leading Icon" 
      variant="filled-ligth" 
      size="small" 
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<Icon component={XClose} color='secondary'/>}
    />

    <Chip
       color="secondary"
      label="Chip filled-ligth"
      variant="filled-ligth"
      size="small"
    />

     <Chip 
        color="secondary"
      icon={<Icon component={Check} 
      color='secondary'/>}  
      label="Chip filled-ligth Leading Icon" 
      variant="filled-ligth" 
      size="small" 
    />

  </Stack>

  <br />


   ### Figma buttons file
<br/>
<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Fnode-id%3D2139-21366%26t%3DHKTcnUU0Sgk8wfrP-1"
  allowfullscreen
/>


  </TabItem>
  <TabItem value="UserExperience" label="User Experience">
<br/>

#### Button UX 
Buttons are a crucial element in a design system, providing users with clear and interactive ways to perform actions. They help guide user behavior, ensuring intuitive navigation and enhancing the overall user experience. 
<br/>
##### Accessibility
<br/>
Well-designed buttons improve accessibility, ensuring that all users, including those with disabilities, can interact with the application effectively. This involves considerations such as appropriate size for touch targets, sufficient contrast between text and background, and clear, descriptive labels that communicate the button's function.
<br/>
##### Feedback and Responsiveness
<br/>
Buttons provide immediate feedback through visual and auditory cues, such as changes in color or elevation when clicked. This responsiveness reassures users that their actions have been registered, creating a more interactive and satisfying experience.
<br/>
##### Enhancing User Flow
<br/>
By strategically placing buttons in logical locations, designers can enhance user flow and streamline tasks. Primary actions should be easy to find and execute, while secondary actions should be available but less prominent. This thoughtful placement helps users complete tasks efficiently, improving their overall experience.
<br/>
##### Emotional Appeal
<br/>
Aesthetically pleasing button designs can evoke positive emotions, contributing to a more enjoyable user experience. Thoughtful use of color, typography, and micro-interactions can make buttons not only functional but also delightful to use.
<br/>
##### In summary,
<br/>
buttons are a key element in any design system, significantly impacting usability, accessibility, and overall user satisfaction. By prioritizing consistent, intuitive, and visually appealing button designs, designers can create interfaces that are both effective and enjoyable to use.

  </TabItem>
</Tabs>









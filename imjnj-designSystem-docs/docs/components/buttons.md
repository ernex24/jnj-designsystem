---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

# Buttons

<Tabs>
  <TabItem value="Codebase" label="Codebase" default>
<br/>
Consistent button styles across the application reinforce branding and improve usability by making interactions predictable and easy to understand.
<br/>
Explore documentation from [MUI Buttons](https://mui.com/material-ui/react-button/).

<br/>

##### Import
<br/>
```jsx

  import Button from '@mui/material/Button';

```

### Primary buttons
<br/>
<br/>

  <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

  <br />
  ```jsx

   <Button variant="text">Text</Button>
   <Button variant="contained">Contained</Button>
   <Button variant="outlined">Outlined</Button>

```

### Secondary buttons
<br/>
<br/>

 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <Button color="secondary" variant="text">Text</Button>
      <Button color="secondary" variant="contained">Contained</Button>
      <Button color="secondary" variant="outlined">Outlined</Button>
    </Stack>

  <br />
  ```jsx

     <Button color="secondary" variant="text">Text</Button>
     <Button color="secondary" variant="contained">Contained</Button>
     <Button color="secondary" variant="outlined">Outlined</Button>

  ```

### Buttons size
<br/>
<br/>

 <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
      <Button size="small" color="primary" variant="contained">Contained</Button>
      <Button size="medium" color="primary" variant="contained">Contained</Button>
      <Button size="large" color="primary" variant="contained">Contained</Button>
  </Stack>

  <br />
  ```jsx

      <Button size="small" color="primary" variant="contained">Contained</Button>
      <Button size="medium" color="primary" variant="contained">Contained</Button>
      <Button size="large" color="primary" variant="contained">Contained</Button>

  ```
<br/>
   ### Figma buttons file
<br/>
<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKgg9mk0liILChULi9LvaM%2FComponents-J%2526J---v1.1.0%3Ftype%3Ddesign%26node-id%3D4702%253A74217%26mode%3Ddesign%26t%3DaauGeEtkawvO4h6l-1"
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









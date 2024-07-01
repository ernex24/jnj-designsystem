---
sidebar_position: 0
---

import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import IMLogoRed from '../../src/theme/logos/JJ_IM_Logo_SingleLine_Red.svg';
import IMLogoBlack from '../../src/theme/logos/JJ_IM_Logo_SingleLine_Black.svg';
import IMLogoWhite from '../../src/theme/logos/JJ_IM_Logo_SingleLine_White.svg';
import JNJLogoRed from '../../src/theme/logos/JNJ_Logo_SingleLine_Red.svg';
import JNJLogoBlack from '../../src/theme/logos/JNJ_Logo_SingleLine_Black.svg';
import JNJLogoWhite from '../../src/theme/logos/JNJ_Logo_SingleLine_White.svg';
import MTLogoRed from '../../src/theme/logos/JNJ_MT_Logo_SingleLine_Red.svg';
import MTLogoBlack from '../../src/theme/logos/JNJ_MT_Logo_SingleLine_Black.svg';
import MTLogoWhite from '../../src/theme/logos/JNJ_MT_Logo_SingleLine_White.svg';

  # Logos

  All the J&J logos are available in .svg format, in the theme/logos folder is recommended to import the .svg files as React Components to be able to apply dinamic styles comming from tokens, if needed.

## Innovative Medicine


##### Import

      ```jsx
      import { JJIMLogoSingleLineBlack } from '@jnj_dnds/designsystem/dist/theme/logos';
      import { JJIMLogoSingleLineRed } from '.@jnj_dnds/designsystem/dist/theme/logos';
      import { JJIMLogoSingleLineWhite } from '@jnj_dnds/designsystem/dist/theme/logos';
      ```
##### Use

      ```jsx
        <img src={ JJIMLogoSingleLineBlack } alt="JNJ IM Logo"/>
        <img src={ JJIMLogoSingleLineRed } alt="JNJ IM Logo"/>
        <img src={ JJIMLogoSingleLineWhite } alt="JNJ IM Logo"/>
      ```
<br/>
    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={8}>
        <IMLogoRed/>
        <IMLogoBlack/>
        <IMLogoWhite className="jnj-color-background-core-black jnj-padding-8"  />
    </Stack>
    <br />     <br />


   ## J&J

##### Import

    ```jsx

      import { JNJLogoSingleLineBlack } from '@jnj_dnds/designsystem/dist/theme/logos';
      import { JNJLogoSingleLineRed } from '@jnj_dnds/designsystem/dist/theme/logos';
      import { JNJLogoSingleLineWhite } from '@jnj_dnds/designsystem/dist/theme/logos';


    ```
##### Use
    ```jsx
        <img src={ JNJLogoSingleLineBlack } alt="JNJ Logo"/>
        <img src={ JNJLogoSingleLineRed } alt="JNJ Logo"/>
        <img src={ JNJLogoSingleLineWhite } alt="JNJ Logo"/>
    ```

 

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={8}>
        <JNJLogoRed/>
        <JNJLogoBlack/>
        <JNJLogoWhite className="jnj-color-background-core-black jnj-padding-8" />
    </Stack>

  <br />

  <br />     <br />
    ## Med Tech

    ##### Import

    ```jsx
      import { JNJMTLogoSingleLineBlack } from '@jnj_dnds/designsystem/dist/theme/logos';
      import { JNJMTLogoSingleLineRed } from '@jnj_dnds/designsystem/dist/theme/logos';
      import { JNJMTLogoSingleLineWhite } from '@jnj_dnds/designsystem/dist/theme/logos';
    ```
##### Use
    ```jsx
        <img src={ JNJMTLogoSingleLineBlack } alt="JNJ MT Logo"/>
        <img src={ JNJMTLogoSingleLineRed } alt="JNJ MT Logo"/>
        <img src={ JNJMTLogoSingleLineWhite } alt="JNJ MT Logo"/>
    ```

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={8}>
        <MTLogoRed/>
        <MTLogoBlack/>
        <MTLogoWhite className="jnj-color-background-core-black jnj-padding-8" />
    </Stack>
      <br />



  <br />

### Figma logos

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D410-5344%26t%3Df8OZiYUBiB7yEXnT-1"
  allowfullscreen
/>

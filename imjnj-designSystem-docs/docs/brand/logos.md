---
sidebar_position: 0
---

import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import jnjTheme from '../../src/theme/theme';
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

  <ThemeProvider theme={jnjTheme}>

  # Logos

  All the J&J logos are available in .svg format, in the theme/logos folder is recommended to import the .svg files as React Components to be able to apply dinamic styles comming from tokens, if needed.

## Innovative Medicine

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={8}>
        <IMLogoRed/>
        <IMLogoBlack/>
        <IMLogoWhite className="jnj-color-background-core-black jnj-padding-8"  />
    </Stack>
    <br />

##### Import

      ```jsx
        import IMLogoRed from '@jnj_dnds/designsystem/dist/theme/logos/JJ_IM_Logo_SingleLine_Red.svg';
        import IMLogoBlack from '@jnj_dnds/designsystem/dist/theme/logos/JJ_IM_Logo_SingleLine_Black.svg';
        import IMLogoWhite from '@jnj_dnds/designsystem/dist/theme/logos/JJ_IM_Logo_SingleLine_White.svg';
      ```
##### Use

      ```jsx
        <img src={IMLogoRed} alt="JNJ IM Logo"/>
        <img src={IMLogoBlack} alt="JNJ IM Logo"/>
        <img src={MLogoWhite} alt="JNJ IM Logo"/>
      ```

    ## J&J

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={8}>
        <JNJLogoRed/>
        <JNJLogoBlack/>
        <JNJLogoWhite className="jnj-color-background-core-black jnj-padding-8" />
    </Stack>

  <br />

##### Import

    ```jsx

      import JNJLogoRed from '@jnj_dnds/designsystem/dist/theme/logos/JNJ_Logo_SingleLine_Red.svg';
      import JNJLogoBlack from '@jnj_dnds/designsystem/dist/theme/logos/JNJ_Logo_SingleLine_Black.svg';
      import JNJLogoWhite from '@jnj_dnds/designsystem/dist/theme/logos/JNJ_Logo_SingleLine_White.svg';

    ```
##### Use
    ```jsx
        <img src={JNJLogoRed} alt="JNJ Logo"/>
        <img src={JNJLogoBlack} alt="JNJ Logo"/>
        <img src={JNJLogoWhite} alt="JNJ Logo"/>
    ```
    ## Med Tech

    <Stack  direction="row" justifyContent="space-around" alignItems="center"  spacing={8}>
        <MTLogoRed/>
        <MTLogoBlack/>
        <MTLogoWhite className="jnj-color-background-core-black jnj-padding-8" />
    </Stack>
      <br />

##### Import

    ```jsx
      import MTLogoRed from '@jnj_dnds/designsystem/dist/theme/logos/JNJ_MT_Logo_SingleLine_Red.svg';
      import MTLogoBlack from '@jnj_dnds/designsystem/dist/theme/logos/JNJ_MT_Logo_SingleLine_Black.svg';
      import MTLogoWhite from '@jnj_dnds/designsystem/dist/theme/logos/JNJ_MT_Logo_SingleLine_White.svg';
    ```
##### Use
    ```jsx
        <img src={MTLogoRed} alt="JNJ MT Logo"/>
        <img src={MTLogoBlack} alt="JNJ MT Logo"/>
        <img src={MTLogoWhite} alt="JNJ MT Logo"/>
    ```
  </ThemeProvider>
  <br />

### Figma logos

<iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxTiCfjt9icR0Ydlrn2VmpO%2FAtoms-J%2526J---v1.1.0%3Fnode-id%3D410-5344%26t%3Df8OZiYUBiB7yEXnT-1"
  allowfullscreen
/>

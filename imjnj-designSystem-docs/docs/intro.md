---
sidebar_position: 0
---

# Installation

Let's discover **Our Design system**.

Our design system is theme from Material UI for React, with all the J&J Styles comming from the new brand guidelines.

## Getting Started

To get started you need to have installed the following development environment.

### What you'll need

1. [Node.js](https://react.dev/) version 18.x or later: Provides the JavaScript runtime environment.

2. [NPM](https://www.npmjs.com/) version 7.x or later: Comes bundled with Node.js, and is used for installing and managing packages.

3. [React.js](https://react.dev/) version 17.x or later: Javascript library for UI in web and native user interfaces

4. [MUI](https://mui.com/material-ui/getting-started/) version 5.x or later: Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.

## Instaling the library

The theme will automatically be added to your project after you run the command:

```bash
npm i @imjnj/tokens@latest
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.
The command also installs all necessary dependencies you need to run the theme.

## Configure the library

1. MUI use a react context **theme provider** you need to import the theme ptovider from MUI and the JNJ Theme from the package downloaded from the package manager:

```jsx title="src/main.jsx"
import { ThemeProvider} from '@mui/material/styles';
import jnjTheme from '@imjnj/tokens/dist/theme.js';
import '@imjnj/tokens/dist/styles.css'
```

2.  2 You need to pass your app/components you want to style trough the theme provider and call the imported theme **jnjTheme**

```jsx title="src/main.jsx"

    <ThemeProvider theme={jnjTheme}>
    <App />
    </ThemeProvider>
```

You will be able to use now all the components from MUI with the JNJ Brand theme applied

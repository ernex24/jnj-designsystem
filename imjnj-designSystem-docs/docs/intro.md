---
sidebar_position: 0
---

# Installation

Welcome to our JNJ D&DS Design System!

Our design system is a theme for MUI, incorporating the official J&J Styleguide based on the new brand guidelines from the J&J Brand Center.

## Getting Started

To get started, ensure you have the following development environment set up.

### Front-end Tech Stack

1. **[Node.js](https://react.dev/)** (version 18.x or later): Provides the JavaScript runtime environment.
2. **[NPM](https://www.npmjs.com/)** (version 7.x or later): Bundled with Node.js, used for installing and managing packages.
3. **[React.js](https://react.dev/)** (version 17.x or later): JavaScript library for building user interfaces create with Create React App, Vite, Next.js etc.
4. **[MUI](https://mui.com/material-ui/getting-started/)** (version 5.x or later): Open-source React component library implementing Google's Material Design with emotion for styles management.

```bash 

npm install @mui/material @emotion/react @emotion/styled

```

## Installing the Library

To install the theme, run the following command:

```bash

npm i @jnj_dnds/designsystem@latest

```

This command can be executed in Command Prompt, Powershell, Terminal, or any integrated terminal in your code editor. It will also install all necessary dependencies for the theme.

## Configuring the library

1. MUI uses a React context called ThemeProvider. You need to import ThemeProvider from MUI and the JNJ Theme from the package you installed:

```jsx title="src/main.jsx"
import { ThemeProvider} from '@mui/material/styles';
import { jnjTheme } from '@jnj_dnds/designsystem/dist/theme/theme.js';
import '@jnj_dnds/designsystem/dist/theme/styles.css'
```

2.  Wrap your application or the components you want to style with the ThemeProvider and apply the imported theme jnjTheme:

```jsx title="src/main.jsx"

    <ThemeProvider theme={jnjTheme}>
    <App />
    </ThemeProvider>
```

Now, you can use all the components from MUI with the JNJ Brand theme applied.

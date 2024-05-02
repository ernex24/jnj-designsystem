---
sidebar_position: 1
---

# Installation

Let's discover **IM Design system**.

## Getting Started

Get started by **creating a new app** or integrating the design system in a already created app.

### What you'll need

1. [Node.js](https://react.dev/) version 18.x or later: Provides the JavaScript runtime environment.

2. [NPM](https://www.npmjs.com/) version 7.x or later: Comes bundled with Node.js, and is used for installing and managing packages.

3. [React.js](https://react.dev/) version 17.x or later: Javascript library for UI in web and native user interfaces

4. [MUI](https://mui.com/material-ui/getting-started/) version 5.x or later: Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.

## Instaling the library

This library is a theme for MUI with the styles of the  **New J&J brand**.
The theme will automatically be added to your project after you run the command:

```bash
npm i @imjnj/tokens@latest
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.
The command also installs all necessary dependencies you need to run the theme.

## Configure the library

1. Add the **theme provider** from MUI and import the theme **jnjTheme** downloaded from the package manager :

```jsx title="src/main.jsx"
import { ThemeProvider} from '@mui/material/styles';
import jnjTheme from '@imjnj/tokens/dist';
import '../theme/styles.css'
```

2.  2 You need to pass your complete app trough the theme provider and call the imported theme

```jsx title="src/main.jsx"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={jnjTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

And you will be able to use now all the components from MUI with the JNJ Brand theme applied

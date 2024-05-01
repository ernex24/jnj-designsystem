import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import jnjTheme from './assets/tokens/jnj-tokens.js'
import { ThemeProvider} from '@mui/material/styles';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={jnjTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)

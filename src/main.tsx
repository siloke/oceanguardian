import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy/styles/CssVarsProvider'
import CssBaseline from '@mui/joy/CssBaseline/CssBaseline'
import theme from './theme.tsx'
import router from './routes.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

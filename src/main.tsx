import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CustomCursor } from '@feverus/react-custom-cursor'
import '@feverus/react-custom-cursor/dist/style.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomCursor cursor={'🦝'}>
      <App />
    </CustomCursor>
  </React.StrictMode>,
)

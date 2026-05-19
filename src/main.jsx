import React from 'react'
import { createRoot } from 'react-dom/client'
import TimeUTB from './TimeUTB.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimeUTB />
  </React.StrictMode>
)

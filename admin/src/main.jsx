import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import {BrowerserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < BrowerserRouter>
    <App />
    </BrowerserRouter>

  </React.StrictMode>,
)
 
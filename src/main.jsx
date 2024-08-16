import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDom from "react-dom/client"
import App from './App.jsx'
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
   
  </React.StrictMode>,
)

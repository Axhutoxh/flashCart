import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoute from './router/Routes'
import '../src/css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoute />
  </React.StrictMode>,
)

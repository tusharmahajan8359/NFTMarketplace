import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TApp from './TApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
   
    <TApp />
  </BrowserRouter>,
  document.getElementById('root')
)


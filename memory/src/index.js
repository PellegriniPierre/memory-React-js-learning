import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

function CoolComponent({ adjective = 'Cool' }) {
    return <p>Youpi So {adjective} !</p>
  }
  
  ReactDOM.render(
    <div>
      <CoolComponent adjective="awesome" />
      <CoolComponent />
    </div>,
    document.getElementById('root')
  )
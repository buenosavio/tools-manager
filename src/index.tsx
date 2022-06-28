import React from 'react'
// import { createRoot } from 'react-dom/client'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import './index.css'

const container = document.getElementById('root')!
// const root = createRoot(container)

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  container
)

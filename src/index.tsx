import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from './reducers/rootReducers'
import './styles.css'

const store = configureStore({
  reducer: rootReducers
})

const container: any = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

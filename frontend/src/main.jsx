import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/auth';
import purchaseReducer from './reducers/purchase'
import { Provider } from 'react-redux'
import './index.css'

const store = configureStore({
  reducer: {
    login: loginReducer,
    purchase: purchaseReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

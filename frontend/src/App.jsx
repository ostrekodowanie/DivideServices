import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./reducers/auth";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Payment from "./pages/Payment";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

const loginFromLocalStorage = JSON.parse(localStorage.getItem('login')) ? JSON.parse(localStorage.getItem('login')) : {
  id: '',
  username: '',
  email: '',
  tokens: {
      access: '',
      refresh: ''
  }
}

export default function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.login)
  const { info } = auth
  const { refresh } = info.tokens

  useEffect(() => {
    if(loginFromLocalStorage.id !== '') dispatch(login(loginFromLocalStorage))
  }, [])
  
  useEffect(() => {
    if(info.id !== '') localStorage.setItem('login', JSON.stringify(info))
    else localStorage.setItem('login', JSON.stringify({
      id: '',
      username: '',
      email: '',
      tokens: {
          access: '',
          refresh: ''
      }
    }))
    if(refresh) {
      setTimeout(() => {
        updateToken()
      }, 600000)
    }
  }, [info])

  const updateToken = async () => {
    const response = await axios.post('/api/token/refresh', JSON.stringify({'refresh': refresh}), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(() => dispatch(logout()))
    if(response.status === 200) {
      let user = jwtDecode(response.data.access)
      dispatch(login({
        id: user.user_id,
        username: user.username,
        email: user.email,
        tokens: response.data
      }))
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/payment/*" element={<PayPalScriptProvider options={{"client-id": 'AdORToXVjx2A9wjRlvRmuu93SboFo1PgQWSYQhZ3bCDm8x_KhHMDkYHDML4kYWXjFYdHAsmm08KS6XSV'}}><Payment /></PayPalScriptProvider>} />
          <Route path="/support" element={<Support />} />
          <Route path="/login/*" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup/*" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/profile/*" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
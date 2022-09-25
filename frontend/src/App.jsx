import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./reducers/auth";
import axios from "axios";
import jwtDecode from "jwt-decode";

const loginFromLocalStorage = JSON.parse(localStorage.getItem('login'))

export default function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.login)
  const { info } = auth
  const { refresh } = info

  useEffect(() => {
    if(loginFromLocalStorage.id !== '') dispatch(login(loginFromLocalStorage))
  }, [])
  
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(info))
    if(refresh) {
      setTimeout(() => {
        updateToken()
      }, 10000)
    }
  }, [info])

  const updateToken = async () => {
    const response = await axios.post('/api/token/refresh', JSON.stringify({'refresh': refresh}), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(response.status === 200) {
      let user = jwtDecode(response.data.access)
      dispatch(login({
        id: user.user_id,
        username: user.username,
        email: user.email,
        tokens: response.data
      }))
    } else {
      dispatch(logout())
    }
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  )
}
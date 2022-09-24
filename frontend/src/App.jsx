import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./reducers/auth";

const loginFromLocalStorage = JSON.parse(localStorage.getItem('login'))

export default function App() {
  const dispatch = useDispatch()
  const { info } = useSelector(state => state.login)

  useEffect(() => {
    if(loginFromLocalStorage) dispatch(login(loginFromLocalStorage))
  }, [])
  
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(info))
  }, [info])

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
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}
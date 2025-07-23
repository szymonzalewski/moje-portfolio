import "./App.css";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./Navbar.css";
import "./Footer.css";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Navbar title="Moja aplikacja" className="navbar" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Main />
        <Footer className="footer" />
      </BrowserRouter>
    </div>
  );
}

export default App;

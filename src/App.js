import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home image={img} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

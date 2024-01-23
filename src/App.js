import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";

// function App() {
//   return (
//     <>
//       <Home image={img} />
//       <Product />
//     </>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home image={img} />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

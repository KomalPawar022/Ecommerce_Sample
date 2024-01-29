import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// BELOW COMPONENTS
import Home from "./component/Home";

import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/cart";
import { LifeCycleComponent } from "./component/LifeCycleComponent";

export default function App() {
  return (
    <>
      <LifeCycleComponent />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Products/:id" element={<Product />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

import "./styles.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// BELOW COMPONENTS
// import Home from "./component/Home";
// //import Navbar from "./component/Navbar";
// import Products from "./component/Products";
// import Product from "./component/Product";
// import Cart from "./component/cart";
import Form from "./component/Form";

export default function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Products/:id" element={<Product />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </Router> */}
      <Form />
    </>
  );
}

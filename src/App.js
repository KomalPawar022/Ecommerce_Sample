import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";

import { OrdersComponent } from "./component/orders/OrdersComponent";
import { OrderDetails } from "./component/orders/OrderDetails";
import { DefaultChild } from "./component/orders/DefaultChild";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home image={img} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<div>Page Not Found</div>} />

          <Route path="Orders" element={<OrdersComponent />}>
            <Route index element={<DefaultChild />} />
            <Route path=":orderid" element={<OrderDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

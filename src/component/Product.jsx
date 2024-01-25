import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const info = {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  };
  const handleClick = () => {
    alert("Item added to cart");
  };

  return (
    <div>
      <div className="col-md-6">
        <img src={info.image} alt={info.title} height="100px" width="100px" />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{info.category}</h4>
        <h1 className="display-5">{info.title}</h1>
        <p className="lead fw-bolder">
          Rating {info.rating && info.rating.rate}
        </p>
        <h3 className="display-6 fw-bold my-4">$ {info.price}</h3>
        <p className="lead">{info.description}</p>
        <div className="container d-flex justify-content-evenly p-2 ">
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

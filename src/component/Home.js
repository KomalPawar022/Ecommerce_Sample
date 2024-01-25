import React from "react";
import Products from "./Products";
import img from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={img} className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5
              className="card-title display-3 fw-bolder mb-1 text-white"
              style={{ backgroundColor: "darkolivegreen" }}
            >
              Fresh Looks for a Fresh Start!
            </h5>
            <p
              className="card-text lead fs-2"
              style={{ backgroundColor: "darkolivegreen" }}
            >
              ESCAPE THE ORDINARY
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;

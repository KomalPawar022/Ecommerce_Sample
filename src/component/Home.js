import React from "react";
import { Link } from "react-router-dom";

const Home = ({ image }) => {
  return (
    <div className="hero">
      <Link to="about" className="m-1">
        About{" "}
      </Link>
      <Link to="contact" className="m-1">
        Contact{" "}
      </Link>
      <Link to="product" className="m-1">
        Product{" "}
      </Link>
      <div className="card bg-dark text-white border-0">
        <img src={image} className="card-img" alt="Background" height="550px" />
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
    </div>
  );
};

export default Home;

// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="about">Click to view our about page</Link>
//       <Link to="contact">Click to view our contact page</Link>
//     </div>
//   );
// }

// export default Home;

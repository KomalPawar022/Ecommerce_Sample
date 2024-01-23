import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Home image={img} />
      <Product />
    </>
  );
}

export default App;

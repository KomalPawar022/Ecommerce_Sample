import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";

function App() {
  return (
    <>
      <Home image={img} />
    </>
  );
}

export default App;

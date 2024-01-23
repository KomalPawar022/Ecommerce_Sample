import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";
import StateComponent from "./component/StateComponent";

function App() {
  return (
    <>
      <StateComponent />
      <Home image={img} />
    </>
  );
}

export default App;

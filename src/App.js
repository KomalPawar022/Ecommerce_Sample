import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import img from "./assets/bg.jpg";
import StateFunctionComponent from "./component/StateFunctionComponent";

function App() {
  return (
    <>
      <StateFunctionComponent />
      <Home image={img} />
    </>
  );
}

export default App;

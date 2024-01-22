import "./styles.css";
import Home from "./component/Home.js";
import ConditionalComponent from "./component/ConditionalComponent";

export default function App() {
  return (
    <div className="App">
      <ConditionalComponent />
      <Home />
    </div>
  );
}

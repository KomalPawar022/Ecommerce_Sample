import "./styles.css";
import Home from "./component/Home.js";
import ConditionalComponent from "./component/ConditionalComponent";
import ParentComponent from "./component/ParentComponent";

export default function App() {
  return (
    <div className="App">
      <ConditionalComponent />
      <ParentComponent />

      <Home />
    </div>
  );
}

import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  render() {
    //const name = "John Doe";
    const age = 25;

    return <ChildComponent age={age} />;
  }
}

export default ParentComponent;

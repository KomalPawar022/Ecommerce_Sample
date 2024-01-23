import React, { Component } from "react";

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default StateComponent;

import React from "react";

export class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");

    this.state = {
      data: [],
      counter: 0,
    };
  }
  //   state={

  //   }
  interval;

  componentDidMount() {
    console.log("ComponentDidMount called");
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((jsonresponse) => {
        this.setState({
          data: jsonresponse.products,
        });
      });

    // this.interval = setInterval(() => {
    //   console.log("SetInterval is getting called");
    // }, 2000);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("render function is called");
    return (
      <div>
        <h1>LifeCycleComponent</h1>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.increment} className="btn btn-primary">
          Increment
        </button>
        <ul className="list-group m-3">
          {this.state.data.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate is called..");
    console.log(prevProps);
    console.log(prevState);
    //throw new Error("Error from Lifecycle component");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
    // clearInterval(this.interval);
  }
}

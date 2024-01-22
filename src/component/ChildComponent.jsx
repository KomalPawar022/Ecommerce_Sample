import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
ChildComponent.defaultProps={
    name:"John"
}
export default ChildComponent;

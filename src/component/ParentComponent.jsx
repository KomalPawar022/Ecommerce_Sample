import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const data = "Hello, Prop Drilling!";

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;

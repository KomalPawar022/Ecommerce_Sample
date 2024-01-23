import React from "react";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = ({ data }) => {
  return (
    <div>
      <GrandChildComponent data={data} />
    </div>
  );
};

export default ChildComponent;

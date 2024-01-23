import React, { useState } from "react";

function StateFunctionComponent() {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default StateFunctionComponent;

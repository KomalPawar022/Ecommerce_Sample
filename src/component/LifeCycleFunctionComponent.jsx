import { useEffect, useState } from "react";

const LifeCycleFunctionComponent = () => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchData = async () => {
    let response = await fetch("https://dummyjson.com/products/");
    let jsonData = await response.json();

    setData(jsonData.products);
  };

  //fetchData();
  console.log("functon component render");

  /// worked like componentdidmount
  useEffect(() => {
    console.log("useeffect called only once here");
    fetchData();
  }, []);

  // worked like componentdidupdate
  useEffect(() => {
    console.log("counter - use effect is called.");
  }, [counter]);

  // worked like unmount
  useEffect(() => {
    // returning a function
    return () => {
      console.log("Component unmount is getting called");
    };
  }, []);

  return (
    <div>
      <h1>LifeCycleFunctionComponent</h1>
      <h2>Counter {counter}</h2>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
      <ul className="list-group m-3">
        {data?.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LifeCycleFunctionComponent;

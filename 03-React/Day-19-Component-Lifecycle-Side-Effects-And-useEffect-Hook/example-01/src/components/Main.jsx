import React from "react";

const Main = (props) => {
  const { count, setCount } = props;

  function handleIncreaseCount() {
    setCount((prev) => prev + 1);
    console.log("count", count);
  }
  function handleDecreaseCount() {
    setCount((prev) => prev - 1);
    console.log("count", count);
  }
  return (
    <div className="main">
      Main
      <div>
        <h1>Count: {count}</h1>
        <div className="btn-container">
          <button onClick={handleIncreaseCount}>Increment</button>
          <button onClick={handleDecreaseCount}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <div>
        <button onClick={handleIncrement}>INC +1</button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={handleDecrement}
          disabled={count === 0}
        >
          DEC -1
        </button>
      </div>
    </div>
  );
};

export default Counter;

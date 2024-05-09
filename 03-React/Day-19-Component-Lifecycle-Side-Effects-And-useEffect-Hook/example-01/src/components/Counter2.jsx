// Counter.jsx ( Count initial Value should be 1. There should be two buttons in this Component. INC, DEC clicking on which should increase, decrease the value of count )

import React from "react";

const Counter2 = () => {
  const [count, setCount] = React.useState(1);

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
    console.log("Count from Increase Function: ", count);
  }

  function handleDecrease() {
    setCount((prevCount) => prevCount - 1);
    console.log("Count from Decrease Function: ", count);
  }

  console.log("Count from Counter2 Function: ", count);
  return (
    <div>
      <h1>Counter2: {count}</h1>
      <div id="btnDiv">
        <button onClick={handleIncrease}>Increase Count</button>
        <button onClick={handleDecrease}>Decrease Count</button>
      </div>
    </div>
  );
};

export default Counter2;

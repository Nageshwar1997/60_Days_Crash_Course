// Counter.jsx ( Count initial Value should be 1. There should be two buttons in this Component. INC, DEC clicking on which should increase, decrease the value of count )

import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
};

export default Counter;

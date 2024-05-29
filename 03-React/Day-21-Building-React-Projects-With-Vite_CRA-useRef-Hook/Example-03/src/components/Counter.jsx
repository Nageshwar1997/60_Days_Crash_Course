import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
      setCount(count + 1);
      console.log(count);
    //   OR 
    //   setCount((prevCount) => prevCount + 1);
  };
  const handleDecreaseCount = () => {
      setCount(count - 1);
      console.log(count);
    //   OR
    //   setCount((prevCount) => prevCount - 1);
    };
    
    console.log("Count from Counter Function: ", count);
  return (
    <div>
      <h1>Count : {count}</h1>
      <div>
        <button onClick={handleIncreaseCount}>INCREASE</button>
        <button onClick={handleDecreaseCount}>DECREASE</button>
      </div>
    </div>
  );
};

export default Counter;

import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  function handleDecreaseCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    document.title = `Count ${count}`;
    console.log("Callback inside useEffect called", count);
  }, [count]);

  console.log("Rendering App", count);
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <div id="btnDiv">
          <button onClick={handleIncreaseCount}>Increase Count</button>
          <button onClick={handleDecreaseCount}>Decrease Count</button>
        </div>
      </div>
    </div>
  );
};

export default App;

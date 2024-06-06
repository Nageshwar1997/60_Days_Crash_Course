// src/components/Counter1.jsx

import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <span style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>
          Decrement
        </button>
      </span>
    </div>
  );
}

export default Counter1;

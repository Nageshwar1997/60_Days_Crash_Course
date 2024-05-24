import "./App.css";
import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide" : "Show"} Counter
      </button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;

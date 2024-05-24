import React, { useState } from "react";
import TimerComponent from "./components/TimerComponent";
import ScrollComponent from "./components/ScrollComponent";
import "./App.css";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showScroll, setShowScroll] = useState(true);

  return (
      <div className="App-header">
        <h1>useEffect Cleanup Example</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <button
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "5px",
              backgroundColor: showTimer ? "lightgreen" : "tomato",
            }}
            onClick={() => setShowTimer(!showTimer)}
          >
            {showTimer ? "Hide Timer" : "Show Timer"}
          </button>
          <button
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "5px",
              backgroundColor: showScroll ? "lightgreen" : "tomato",
            }}
            onClick={() => setShowScroll(!showScroll)}
          >
            {showScroll ? "Hide Scroll" : "Show Scroll"}
          </button>
        </div>
        {showTimer && <TimerComponent />}
        {showScroll && <ScrollComponent />}
      </div>
  );
}

export default App;

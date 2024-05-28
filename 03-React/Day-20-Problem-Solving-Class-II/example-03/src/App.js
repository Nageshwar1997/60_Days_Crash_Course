import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="App">
      {showTimer ? <Timer /> : null}
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;

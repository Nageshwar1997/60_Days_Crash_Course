import { useState } from "react";
import "./App.css";
import Sample from "./components/Sample";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <>
      {/* Example 1 */}
      <Sample />
      <br />
      <hr />
      {/* Example 2 */}
      {showTimer && <Timer />}
      <br />
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </>
  );
}

export default App;

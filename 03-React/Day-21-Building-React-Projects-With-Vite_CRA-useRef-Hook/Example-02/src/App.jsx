import InputRef from "./components/InputRef";
import Timer from "./components/Timer";
import { useState } from "react";
const App = () => {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div>
      <InputRef />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div>
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "Hide Timer" : "Show Timer"}
        </button>
        {showTimer && <Timer />}
      </div>
    </div>
  );
};

export default App;

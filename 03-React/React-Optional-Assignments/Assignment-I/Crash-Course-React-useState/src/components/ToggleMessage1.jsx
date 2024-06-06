// src/components/ToggleMessage1.jsx

import { useState } from "react";

function ToggleMessage1() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <p>Hello, World!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
    </div>
  );
}

export default ToggleMessage1;

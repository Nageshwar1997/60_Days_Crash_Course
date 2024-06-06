// src/components/ToggleButton.jsx

import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p style={{ color: isOn ? "green" : "red" }}>{isOn ? "ON" : "OFF"}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default ToggleButton;

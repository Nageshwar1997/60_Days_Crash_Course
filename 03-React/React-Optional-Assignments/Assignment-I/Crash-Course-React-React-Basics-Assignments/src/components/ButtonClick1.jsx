// src/components/ButtonClick1.jsx

import { useState } from "react";

function ButtonClick1() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonClick1;

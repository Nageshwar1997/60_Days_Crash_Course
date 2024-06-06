// src/components/TextInput1.jsx

import { useState } from "react";

function TextInput1() {
  const [text, setText] = useState("");

  return (
    <div>
      <p>Entered text: {text}</p>
      <input
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TextInput1;

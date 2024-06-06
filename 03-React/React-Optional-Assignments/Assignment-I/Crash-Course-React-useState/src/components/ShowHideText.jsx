// src/components/ShowHideText.jsx

import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      {showText && <p>This is a toggled text!</p>}
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        {showText ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

export default ShowHideText;

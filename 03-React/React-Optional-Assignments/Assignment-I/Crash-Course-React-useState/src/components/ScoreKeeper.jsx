// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <span style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            setScore(score + 5);
          }}
        >
          Increase by 5
        </button>
        <button
          onClick={() => {
            setScore(score - 5);
          }}
          disabled={score === 0}
        >
          Decrease by 5
        </button>
      </span>
    </div>
  );
}

export default ScoreKeeper;

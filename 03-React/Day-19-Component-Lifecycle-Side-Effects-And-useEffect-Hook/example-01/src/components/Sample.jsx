import React from "react";

const Sample = () => {
  const [flag, setFlag] = React.useState(false);
  return (
    <div style={{ border: "1px solid black" }}>
      <strong>Sample Component</strong>
      <h4
        style={{ color: flag ? "green" : "red", textTransform: "capitalize" }}
      >
        {flag.toString()}
      </h4>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
    </div>
  );
};

export default Sample;

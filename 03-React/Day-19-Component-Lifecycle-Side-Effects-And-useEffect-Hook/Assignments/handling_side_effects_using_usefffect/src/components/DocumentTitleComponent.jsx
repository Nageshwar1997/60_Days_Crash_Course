import React, { useState, useEffect } from "react";

const DocumentTitleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 10) {
      document.title = `Current Title Count : 0${count}`;
    } else {
      document.title = `Current Title Count : ${count}`;
    }
  }, [count]);

  return (
    <div>
      <h1>Document Title</h1>
      <button onClick={() => setCount(count + 1)}>INC Title Count</button>
      <button style={{marginLeft:"10px"}} onClick={() => setCount(count - 1)}>DEC Title Count</button>
    </div>
  );
};

export default DocumentTitleComponent;

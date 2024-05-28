import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       console.log("Hello", Date.now());
  //     }, 1000);

  //     function cleanUpFunc() {
  //       console.log("Clean Up Function Called");
  //       clearInterval(intervalId);
  //     }

  //     return cleanUpFunc;
  //   }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval is Running");
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalId);
        }
        return prevCount - 1;
      });
    }, 1000);

    function cleanUpFunc() {
      console.log("Clean Up Function Called & Interval Stopped");
      clearInterval(intervalId);
    }

    return cleanUpFunc;
  }, []);
  return (
    <div>
      <h1>Count Down Timer</h1>
      <h3>{count}</h3>
    </div>
  );
};

export default Timer;

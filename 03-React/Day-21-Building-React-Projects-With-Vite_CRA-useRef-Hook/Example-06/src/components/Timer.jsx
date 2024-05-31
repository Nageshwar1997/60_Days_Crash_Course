import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cleanUpFunc = () => {
      console.log("Interval is cleared", Date.now());
      clearInterval(intervalRef.current);
    };
    return cleanUpFunc;
  }, []);

  const startTimer = () => {
    if (intervalRef.current !== null) {
      console.log("Timer is already started", Date.now());
      return;
    }
    console.log("Timer is started", Date.now());
    intervalRef.current = setInterval(() => {
      console.log("Interval is running", Date.now());
      setCount((prevCount) => {
        if (prevCount <= 1) {
          console.log("Timer is stopped", Date.now());
          clearInterval(intervalRef.current);
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    console.log("Timer is stopped", Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = null; // set it to null as a default value
  };

  const resetTimer = () => {
    console.log("Timer is stopped", Date.now());
    console.log("Timer is reset", Date.now());
    stopTimer();
    setCount(10);
  };

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;

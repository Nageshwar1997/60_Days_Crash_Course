import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Middle = () => {
  const fruitsList = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Pineapple",
    "Watermelon",
  ];
  const [count, setCount] = useState(0);
  return (
    <div className="middle">
      <Sidebar fruitsList={fruitsList} />
      <Main count={count} setCount={setCount} />
    </div>
  );
};

export default Middle;

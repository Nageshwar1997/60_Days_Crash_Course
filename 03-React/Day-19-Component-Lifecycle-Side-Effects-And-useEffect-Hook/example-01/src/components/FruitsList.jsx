// FruitsList.jsx ( This component will have list of fruits ) - Use Array

import React from "react";

let fruits = ["Apple", "Banana", "Orange", "Pear", "Grape", "Cherry", "Mango"];
const FruitsList = () => {
  return (
    <div>
      {fruits.map((fruit, index) => {
        return <p key={index}>{fruit}</p>;
      })}
    </div>
  );
};

export default FruitsList;

import { useState } from "react";

const ButtonWithUseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log("ButtonWithUseState rendering....", Date.now());

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>BUTTON WITH USE STATE</button>
    </div>
  );
};

export default ButtonWithUseState;

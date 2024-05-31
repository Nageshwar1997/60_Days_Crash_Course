import { useState } from "react";
import { useRef } from "react";

const ButtonWithUseRef = () => {
  let ref = useRef(0);
  
  console.log(ref); // it return an object ---> {current: 0}
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref); // it return an object ---> {current: 1}
  };
  console.log("ButtonWithUseRef rendering....", Date.now());

  return (
    <div>
      <h1>Count : {ref.current}</h1>
      <button onClick={handleClick}>BUTTON WITH USE REF</button>
      <br />
      <br />
      <button onClick={() => setFlag(!flag)}>{flag.toString()}</button>
    </div>
  );
};

export default ButtonWithUseRef;

import { useRef, useState } from "react";
import "./App.css";

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
function App() {
  return (
    <>
      <ButtonWithUseState />
      <br />
      <hr />
      <ButtonWithUseRef />
    </>
  );
}

export default App;

import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        onChange={handleChange}
        placeholder="Unclontrolled Input"
      />
      <br />
    </>
  );
}

export default UncontrolledInput;

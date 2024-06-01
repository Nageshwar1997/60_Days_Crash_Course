import { useRef, useEffect } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} placeholder="Focusable Input" />
      <br />
    </>
  );
}

export default FocusableInput;

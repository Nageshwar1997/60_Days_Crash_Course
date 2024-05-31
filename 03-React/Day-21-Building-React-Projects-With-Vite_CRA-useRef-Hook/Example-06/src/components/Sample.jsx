import { useEffect } from "react";
import { useRef } from "react";
function Sample() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter Sample Inputs" />
    </>
  );
}

export default Sample;

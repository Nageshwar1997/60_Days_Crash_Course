import { useEffect } from "react";
import { useRef } from "react";

function InputRef() {
  const ref = useRef(null);
  useEffect(() => {
    // document.getElementById("todo_input").focus(); // it is not a react way of doing things
    // console.log(ref);
    ref.current.focus(); // it is a react way of doing things
  }, []);

  return (
    <div>
      <input
        ref={ref}
        id="todo_input"
        type="text"
        placeholder="Enter Todo"
      />
    </div>
  );
}

export default InputRef;

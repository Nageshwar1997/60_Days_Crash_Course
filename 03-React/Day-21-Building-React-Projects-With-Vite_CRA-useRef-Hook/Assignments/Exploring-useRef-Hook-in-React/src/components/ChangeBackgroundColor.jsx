import { useRef } from "react";

function ChangeBackgroundColor() {
  const elementRef = useRef(null);

  const handleClick = () => {
    elementRef.current.style.backgroundColor = "blue"; // Change color as needed
  };

  return (
    <div
      ref={elementRef}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        border: "1px solid black",
      }}
    >
      <p>Click the below button to change the color</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ChangeBackgroundColor;

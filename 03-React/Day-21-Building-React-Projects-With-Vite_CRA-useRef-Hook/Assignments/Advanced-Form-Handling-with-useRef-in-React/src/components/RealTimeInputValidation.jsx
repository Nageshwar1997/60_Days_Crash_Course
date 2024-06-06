import { useRef, useState } from "react";

const RealTimeInputValidation = () => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(false);

  const handleValidation = () => {
    if (inputRef.current.value.length >= 5) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter at least 5 characters"
        onChange={handleValidation}
        style={{ border: isValid ? "2px solid green" : "2px solid red" }}
      />
      {isValid ? (
        <p style={{ color: "green" }}>Valid input</p>
      ) : (
        <p style={{ color: "red" }}>Invalid input</p>
      )}
    </div>
  );
};

export default RealTimeInputValidation;

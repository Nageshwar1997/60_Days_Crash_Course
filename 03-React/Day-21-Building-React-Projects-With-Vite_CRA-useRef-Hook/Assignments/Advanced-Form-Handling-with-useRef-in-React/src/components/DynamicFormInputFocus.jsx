import { useEffect, useRef } from "react";

const DynamicFormInputFocus = () => {
  const inputRefYourName = useRef(null);
  const inputRefFatherName = useRef(null);
  const inputRefSurname = useRef(null);

  const handleTab = (e, ref) => {
    if (e.key == "Tab") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  useEffect(() => {
    inputRefYourName.current.focus();
  }, []);

  return (
    <form
      style={{
        border: "2px solid black",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input
        ref={inputRefYourName}
        onKeyDown={(e) => handleTab(e, inputRefFatherName)}
        type="text"
        placeholder="Enter Your Name"
      />
      <input
        ref={inputRefFatherName}
        onKeyDown={(e) => handleTab(e, inputRefSurname)}
        type="text"
        placeholder="Enter Father Name"
      />
      <input
        ref={inputRefSurname}
        onKeyDown={(e) => handleTab(e, inputRefYourName)}
        type="text"
        placeholder="Enter Surname"
      />
    </form>
  );
};

export default DynamicFormInputFocus;

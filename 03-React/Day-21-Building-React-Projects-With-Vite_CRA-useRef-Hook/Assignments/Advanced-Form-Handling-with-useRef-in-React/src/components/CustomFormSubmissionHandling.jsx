import { useRef, useState } from "react";

const CustomFormSubmissionHandling = () => {
  const inputRefPassword = useRef(null);
  const inputRefUsername = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: inputRefUsername.current.value,
      password: inputRefPassword.current.value,
    };

    if (error == "") {
      setError("Fields cannot be empty");
      return;
    } else {
      setError("");
    }
    console.log(formData);
  };
  return (
    <>
      <form
              style={{
            margin: "auto",
          width: "50%",
          border: "2px solid black",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          ref={inputRefUsername}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        <input
          ref={inputRefPassword}
          name="password"
          type="text"
          placeholder="Enter Password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CustomFormSubmissionHandling;

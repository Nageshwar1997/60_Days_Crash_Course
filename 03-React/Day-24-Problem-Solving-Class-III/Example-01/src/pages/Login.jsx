import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let resp = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: formState,
      });
      console.log(resp);
      console.log(resp?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: "grid", gap: "10px" }}>
        <div>
          <label>
            Email :{" "}
            <input
              type="text"
              name="email"
              value={formState?.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
            />
          </label>
        </div>
        <div>
          <label>
            Password :{" "}
            <input
              type="text"
              name="password"
              value={formState?.password}
              onChange={handleInputChange}
              placeholder="Enter Your Password"
            />
          </label>
        </div>
        <div>
          <input type="submit" value={"Login"} />
        </div>
      </form>
    </div>
  );
};

export default Login;

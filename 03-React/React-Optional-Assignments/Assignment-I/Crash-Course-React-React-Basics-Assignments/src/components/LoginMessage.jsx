/* eslint-disable react/prop-types */
// src/components/LoginMessage.jsx


function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn ? "Hello, User!" : "Access Denied"}</div>;
}

export default LoginMessage;

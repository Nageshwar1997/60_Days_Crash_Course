/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    token: null,
  });

  const login = (token) => {
    setAuthDetails({ ...authDetails, isLoggedIn: true, token });
  };
  const logout = () => {
    setAuthDetails({ ...authDetails, isLoggedIn: false, token: null });
  };
  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };

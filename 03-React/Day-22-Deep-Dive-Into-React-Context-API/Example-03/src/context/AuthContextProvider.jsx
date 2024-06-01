/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

// Step 1. Create Context
const AuthContext = createContext();

// Step 2A. Provide Context
function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);

  const logout = () => setIsLoggedIn(false);

  const allTheValuesToBeSentInAuthContext = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={allTheValuesToBeSentInAuthContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };

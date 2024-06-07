/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const { authDetails } = useContext(AuthContext);
  if (!authDetails?.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;

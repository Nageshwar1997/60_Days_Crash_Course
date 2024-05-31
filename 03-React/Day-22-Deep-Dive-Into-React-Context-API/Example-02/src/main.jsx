import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Step 1: Create a Context
export const AuthContext = createContext();
// console.log("AuthContext", AuthContext);


// Step 2 : Wrap App with AuthContext.Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext.Provider value={{ isLoggedIn: true }}>
    <App />
  </AuthContext.Provider>
);

// In the value I can pass any data I want.
// e.g number, string, boolean, array, object

// Step 3 : Use useContext to get data  OR Consume the data

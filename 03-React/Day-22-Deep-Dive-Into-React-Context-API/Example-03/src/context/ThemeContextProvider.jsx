/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

// Step 1. Create Context
const ThemeContext = createContext();

// Step 2A. Provide Context
function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };

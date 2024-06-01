import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const BottomMainLeft = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={`bottomMainLeft ${theme == "light" ? "lightTheme" : "darkTheme"}`}>
      Bottom Main Left
      <h4>Theme : {theme}</h4>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default BottomMainLeft;

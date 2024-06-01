import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
const BottomMainRight = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  console.log("In BottomMainRight isLoggedIn", isLoggedIn);

  function handleLoginLogout() {
    isLoggedIn ? logout() : login();
  }

  return (
    <div className="bottomMainRight">
      Bottom Main Right - <h4>User Logged In : {isLoggedIn ? "Yes" : "No"}</h4>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? "LOGOUT" : "LOGIN"}
      </button>
    </div>
  );
};

export default BottomMainRight;

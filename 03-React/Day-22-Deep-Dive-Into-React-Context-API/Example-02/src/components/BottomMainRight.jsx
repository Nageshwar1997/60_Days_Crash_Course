import { useContext } from "react";
import { AuthContext } from "../main";
const BottomMainRight = () => {
  // const value = useContext(AuthContext);
  // console.log("val", value); // OR

  const { isLoggedIn } = useContext(AuthContext);
  console.log("In BottomMainRight isLoggedIn", isLoggedIn);

  return (
    <div className="bottomMainRight">BottomMainRight - {isLoggedIn.toString()}
    <p>Hello Hi</p></div>
  );

};

export default BottomMainRight;

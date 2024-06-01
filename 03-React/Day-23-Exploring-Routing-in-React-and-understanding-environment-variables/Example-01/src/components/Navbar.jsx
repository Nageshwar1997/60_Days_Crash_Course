import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Navbar</div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/courses"}>Courses</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signUp"}>SignUp</Link>
    </div>
  );
};

export default Navbar;

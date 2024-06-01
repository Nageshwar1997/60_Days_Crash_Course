import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/login",
    label: "Login",
  },
  {
    to: "/signUp",
    label: "SignUp",
  },
  {
    to: "/users",
    label: "Users",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Navbar</div>
      {links?.map((link) => {
        return (
          <Link key={link?.to} to={link?.to}>
            {link?.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;

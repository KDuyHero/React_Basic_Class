import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/timer">Timer Apps</NavLink>
      <NavLink to="/todo">Todo Apps</NavLink>
      <NavLink to="/blog">Blog Apps</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
};

// cần export để có thể import ở nơi khác => tái sử dụng
export default Nav;

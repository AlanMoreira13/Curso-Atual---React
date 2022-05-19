import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </nav>
  );
};

export default Navbar;

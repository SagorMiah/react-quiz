import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav" className="flex justify-between items-center px-12 py-4">
      <NavLink to="/" className="font-bold text-lg cursor-pointer">
        <h1>Logo</h1>
      </NavLink>
      <div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

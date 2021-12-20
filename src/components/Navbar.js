import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Logout } from "react-hero-icon/solid";
import { UserCircle } from "react-hero-icon/outline";

const Navbar = () => {
  const { currentUser, signout } = useAuth();
  return (
    <nav id="nav" className="flex justify-between items-center px-12 py-4">
      <NavLink to="/" className="font-bold text-lg cursor-pointer">
        <h1>Logo</h1>
      </NavLink>
      <div>
        <ul className="flex space-x-4 font-semibold">
          {currentUser ? (
            <>
              <li>
                <UserCircle className="h-6" />
              </li>
              <li className="capitalize">{currentUser.displayName}</li>
              <li onClick={signout}>
                <NavLink to="/">
                  <Logout className="h-6" />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

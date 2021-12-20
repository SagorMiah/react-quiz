import React from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="w-1/2 mt-20">
      <input
        className="rounded-md w-full mb-4 p-2"
        type="email"
        placeholder="Enter your Email"
      />
      <input
        className="rounded-md w-full mb-4 p-2"
        type="password"
        placeholder="Enter your password"
      />
      <button className="w-full text-center bg-blue-500 text-white font-bold text-xl py-2 rounded-md">
        SUBMIT NOW
      </button>
      <div className="mt-2 text-center">
        <span>
          Don't have an account?{" "}
          <NavLink className="text-blue-500 font-semibold" to="/signup">
            Signup
          </NavLink>{" "}
          Insted
        </span>
      </div>
    </form>
  );
};

export default LoginForm;

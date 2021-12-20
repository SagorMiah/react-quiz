import React from "react";
import { NavLink } from "react-router-dom";

const Form = () => {
  return (
    <form className="w-1/2 mt-10">
      <input
        className="rounded-md w-full mb-4 p-2"
        type="text"
        placeholder="Enter your Username"
        name=""
        id=""
      />
      <input
        className="rounded-md w-full mb-4 p-2"
        type="email"
        placeholder="Enter your Email"
        name=""
        id=""
      />
      <input
        className="rounded-md w-full mb-4 p-2"
        type="password"
        placeholder="Enter your password"
        name=""
        id=""
      />
      <input
        className="rounded-md w-full mb-4 p-2"
        type="password"
        placeholder="Enter your confirm password"
        name=""
        id=""
      />
      <div>
        <input type="checkbox" />{" "}
        <span>I agree to the Terms & Conditions.</span>
      </div>
      <button className="w-full text-center bg-blue-500 text-white font-bold text-xl py-2 rounded-md mt-4">
        SUBMIT NOW
      </button>

      <div className="mt-2 text-center">
        <span>
          Already have an account?{" "}
          <NavLink className="text-blue-500 font-semibold" to="/login">
            Login
          </NavLink>{" "}
          Insted
        </span>
      </div>
    </form>
  );
};

export default Form;

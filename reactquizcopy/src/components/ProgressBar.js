import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-hero-icon/solid";

const ProgressBar = () => {
  return (
    <div className="progress items-center rounded-lg">
      <NavLink to="/">
        <ArrowLeft className="h-6" />
      </NavLink>
      <div className="w-4/5">
        <div className="w-full h-1 bg-gray-300 relative">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-black"></div>
        </div>
      </div>
      <NavLink to="/result">
        <ArrowRight className="h-6" />
      </NavLink>
    </div>
  );
};

export default ProgressBar;

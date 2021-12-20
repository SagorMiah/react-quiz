import React from "react";
import v1 from "../images/3.jpg";
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
    <NavLink to="/quiz">
      <div className="bg-white p-3 cursor-pointer rounded-sm">
        <img src={v1} alt="" />
        <div>
          <h2 className="py-2 text-sm">
            # React Custom Hooks tutorial -React bangla Tutorial series
          </h2>
          <div className="flex justify-between pb-2 text-sm">
            <h4>4 Questions</h4>
            <span>Total points: 20</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Video;

import React from "react";
import success from "../images/success.png";

const Score = ({ score, noq }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2 text-center font-bold text-lg">
        <h3>
          Your score is <br /> {score} out of {noq * 5}
        </h3>
      </div>
      <div className="w-1/2">
        <img className="mx-auto" src={success} alt="" />
      </div>
    </div>
  );
};

export default Score;

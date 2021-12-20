import React from "react";

const Answers = ({ text }) => {
  return (
    <div className="answers bg-gray-300 px-4 py-3 mb-3 rounded-md">
      <input type="checkbox" /> <span>{text}</span>
    </div>
  );
};

export default Answers;

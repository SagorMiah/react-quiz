import React from "react";

const Question = ({ question, bordered, textClass, information }) => {
  return (
    <div className={`${bordered}`}>
      <h1 className={`${textClass} text-gray-700 mb-1`}>{question}?</h1>
      <p className="font-semibold text-gray-500 pb-2">{information}</p>
    </div>
  );
};

export default Question;

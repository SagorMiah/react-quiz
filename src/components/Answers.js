import React, { Fragment } from "react";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <label
              key={index}
              className="answers bg-gray-300 px-4 py-3 mb-3 rounded-md flex items-center cursor-pointer"
            >
              <input
                value={index}
                checked={option.checked}
                onChange={(e) => handleChange(e, index)}
                type="checkbox"
              />
              <span className="ml-1">{option.title}</span>
            </label>
          ) : (
            <label
              key={index}
              className={`answers bg-gray-300 px-4 py-3 mb-3 rounded-md flex items-center cursor-pointer ${
                option.correct
                  ? "bg-blue-500 text-white"
                  : option.checked
                  ? "bg-red-500 text-white"
                  : null
              }`}
            >
              <input type="checkbox" defaultChecked={option.checked} disabled />
              <span className="ml-1">{option.title}</span>
            </label>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Answers;

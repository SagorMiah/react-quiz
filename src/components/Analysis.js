import React from "react";
import Answers from "./Answers";
import Question from "./Question";

const Analysis = ({ answers = [] }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-2">Question Analysis</h1>
      {answers.map((question, index) => (
        <div key={index} className="bg-white py-2 px-3 mb-4">
          <Question question={question.title} textClass="text-lg font-bold" />
          <div className="flex justify-between flex-wrap">
            <Answers input={false} options={question.options} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analysis;

import React from "react";
import Answers from "./Answers";
import Question from "./Question";

const Analysis = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-2">Question Analysis</h1>
      <div className="bg-white py-2 px-3 mb-4">
        <Question
          question="How to declare JavaScript variables"
          textClass="text-lg font-bold"
        />
        <div className="flex justify-between flex-wrap">
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
        </div>
      </div>

      <div className="bg-white py-2 px-3 mb-4">
        <Question
          question="How to declare JavaScript variables"
          textClass="text-lg font-bold"
        />
        <div className="flex justify-between flex-wrap">
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
        </div>
      </div>

      <div className="bg-white py-2 px-3 mb-4">
        <Question
          question="How to declare JavaScript variables"
          textClass="text-lg font-bold"
        />
        <div className="flex justify-between flex-wrap">
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
          <Answers text="with var" />
        </div>
      </div>
    </div>
  );
};

export default Analysis;

import React from "react";
import Answers from "../components/Answers";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import MiniPlayer from "../components/MiniPlayer";

const Quiz = () => {
  return (
    <div className="py-10">
      <Question
        bordered="border-b border-gray-300 mb-10"
        textClass="text-3xl font-bold"
        question="How to declare JavaScript variables"
        information="Question can have multiple answers"
      />
      <div className="flex justify-between flex-wrap mb-72 pt-10">
        <Answers text="with var" />
        <Answers text="with let" />
        <Answers text="with const" />
        <Answers text="with const" />
        <Answers text="with const" />
        <Answers text="with const" />
        <Answers text="with const" />
        <Answers text="with const" />
        <Answers text="with const" />
        <Answers text="with const" />
      </div>
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
};

export default Quiz;

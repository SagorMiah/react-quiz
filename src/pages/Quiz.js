import React, { useEffect, useReducer, useState } from "react";
import Answers from "../components/Answers";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import MiniPlayer from "../components/MiniPlayer";
import { useParams } from "react-router-dom";
import useQuestions from "../hooks/useQuestions";
import _ from "lodash";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";
import { useHistory } from "react-router-dom";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionID].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestions, setCurrentQuestions] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const history = useHistory();
  const { location } = history;
  const { state } = location;
  const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnserChange = (e, index) => {
    dispatch({
      questionID: currentQuestions,
      type: "answer",
      value: e.target.checked,
      optionID: index,
    });
  };

  const nextQuestion = () => {
    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestions((preQuestion) => preQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestions >= 1 && currentQuestions < questions.length) {
      setCurrentQuestions((prevQuestion) => prevQuestion - 1);
    }
  };

  const precentage =
    questions.length > 0
      ? ((currentQuestions + 1) / questions.length) * 100
      : 0;

  const submit = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `/result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    history.push({
      pathname: `/result/${id}`,
      state: qna,
    });
  };

  return (
    <div className="py-10">
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <Question
            bordered="border-b border-gray-300 mb-10"
            textClass="text-3xl font-bold"
            question={qna[currentQuestions].title}
            information="Question can have multiple answers"
          />
          <div className="flex justify-between flex-wrap mb-72 pt-10">
            <Answers
              input
              options={qna[currentQuestions].options}
              handleChange={handleAnserChange}
            />
          </div>
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={precentage}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </div>
  );
};

export default Quiz;

import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Analysis from "../components/Analysis";
import Score from "../components/Score";
import useAnswer from "../hooks/useAnswer";
import _ from "lodash";

const Result = () => {
  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const qna = state;
  const { loading, error, answers } = useAnswer(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndex = [],
        checkedIndex = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });

    return score;
  }

  const useScore = calculate();
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Score score={useScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </div>
  );
};

export default Result;

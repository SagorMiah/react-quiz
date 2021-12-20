import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((preQuestions) => {
            return [...preQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        setLoading(false);
        setError("You have a Problem!");
      }
    }
    fetchQuestions();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
}

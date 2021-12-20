import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswer(videoId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchResult() {
      const db = getDatabase();
      const resultRef = ref(db, "answers/" + videoId + "/questions");
      const resultQuery = query(resultRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(resultQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setAnswers((preAns) => {
            return [...preAns, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        setLoading(false);
        setError("There was an error!");
      }
    }
    fetchResult();
  }, [videoId]);

  return {
    loading,
    error,
    answers,
  };
}

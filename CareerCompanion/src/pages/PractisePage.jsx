import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PractisePage.css";

export default function PracticePage() {
  const { companyName, roundTitle } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/questions/${companyName}`);
        if (!res.ok) throw new Error("Failed to fetch questions");
        const data = await res.json();

        setQuestions(data.filter(q => q.round === roundTitle));
      } catch (err) {
        console.error(err);
        setError("Error fetching questions.");
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [companyName, roundTitle]);

  return (
    <div className="practice-page">
      <Link to={`/company/${companyName}`} className="back-button">
        ← Back to {companyName}
      </Link>

      <h1>{companyName} - {roundTitle} Questions</h1>

      {loading && <p>Loading questions...</p>}
      {error && <p className="error">{error}</p>}

      {questions.length > 0 ? (
        <div className="questions-list">
          {questions.map((q, idx) => (
            <div key={idx} className="question-item">
              <h4>{q.category} - {q.round}</h4>
              <p><strong>Q:</strong> {q.question}</p>
              {q.options && (
                <ul>
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              )}
              <p><strong>Answer:</strong> {q.answer}</p>
              <p><strong>Explanation:</strong> {q.explanation}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No questions available for this round.</p>
      )}
    </div>
  );
}

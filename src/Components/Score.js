import React from "react";

const Score = ({ score, total, questions, userAnswers }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Quiz Completed!</h2>
      <p style={{ textAlign: "center" }}>
        Your Score: {score} / {total}
      </p>

      <h3>Answer Review:</h3>
      <ul>
        {questions.map((q, index) => {
          const userAns = userAnswers[index];
          const isCorrect = userAns === q.answer;
          return (
            <li key={index} style={{ marginBottom: "12px" }}>
              <strong>
                Q{index + 1}: {q.question}
              </strong>
              <br />
              ✅ Correct Answer: <strong>{q.answer}</strong>
              <br />
              🧑 Your Answer:{" "}
              <span style={{ color: isCorrect ? "green" : "red" }}>
                {userAns ? userAns : "No Answer"}
                {isCorrect ? " ✔️" : " ❌"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Score;

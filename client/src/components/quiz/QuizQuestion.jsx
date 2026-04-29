export default function QuizQuestion({ question, onSelect }) {
  if (!question) return <p>No question found.</p>;

  return (
    <div className="quiz-question">
      <h2>{question.text}</h2>
      <div className="quiz-options">
        {question.options.map((option) => (
          <button key={option} type="button" onClick={() => onSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

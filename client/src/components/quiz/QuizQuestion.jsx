export default function QuizQuestion({ question, onSelect }) {
  if (!question) return <p>No question found.</p>;

  return (
    <div className="quiz-question">
      <p className="quiz-text">{question.text}</p>

      <div className="options">
        {question.options.map((option) => (
          <button key={option} type="button" onClick={() => onSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

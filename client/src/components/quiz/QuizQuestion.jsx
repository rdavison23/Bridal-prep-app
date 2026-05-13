export default function QuizQuestion({ question, onSelect, current, total }) {
  if (!question) return <p>No question found.</p>;

  return (
    <div className="quiz-question">
      <p className="quiz-text">{question.text}</p>

      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} type="button" onClick={() => onSelect(option)}>
            {option.label}
          </button>
        ))}
      </div>

      <div className="quiz-progress">
        Question {current + 1} of {total}
      </div>
    </div>
  );
}

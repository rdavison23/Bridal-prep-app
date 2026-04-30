import { useLocation } from 'react-router-dom';

export default function QuizResults() {
  const { state } = useLocation();
  console.log('QuizResults state:', state);

  if (!state) return <p>No results found.</p>;

  const { style_profile, images, quiz_version } = state;

  return (
    <div className="quiz-results">
      <h1>Your Style: {style_profile}</h1>
      <p>Quiz Version: {quiz_version}</p>

      <div className="results-images">
        {images.map((url, i) => (
          <img key={i} src={url} alt="Bridal style" />
        ))}
      </div>
    </div>
  );
}

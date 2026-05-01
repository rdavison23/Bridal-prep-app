import { useLocation, useNavigate } from 'react-router-dom';

export default function QuizResults() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="quiz-results">
        <p>No result found. Please take the quiz first.</p>
        <button onClick={() => navigate('/quiz')}>Go to Quiz</button>
      </div>
    );
  }

  const { style_profile, images, quiz_version } = state;

  return (
    <div className="quiz-results">
      <h1>Your Bridal Style</h1>

      <section className="style-profile">
        <h2>Style Profile</h2>
        <p>{style_profile}</p>
        <small>Quiz version: {quiz_version}</small>
      </section>

      <section className="results-images">
        <h2>Inspiration Images</h2>

        <div className="image-grid">
          {images?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Bridal inspiration ${index + 1}`}
              className="result-image"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

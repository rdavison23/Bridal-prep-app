import { useLocation, useNavigate } from 'react-router-dom';

export default function QuizResults() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="quiz-results empty-state">
        <p>No result found. Please take the quiz first.</p>
        <button onClick={() => navigate('/quiz')}>Go to Quiz</button>
      </div>
    );
  }

  const { styleProfile, images } = state;

  return (
    <div className="quiz-results">
      <div className="style-banner">
        <p className="style-banner-eyebrow">Your style profile</p>
        <p className="style-banner-name">{styleProfile}</p>
      </div>

      <div className="image-grid">
        {images?.map((url, index) => (
          <div key={index} className="image-grid-item">
            <img
              src={url}
              alt=""
              role="presentation"
              className="result-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

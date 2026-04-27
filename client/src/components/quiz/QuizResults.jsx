import { useLocation } from 'react-router-dom';

export default function QuizQuestion() {
  const { state } = useLocation();

  if (!state) return <p> No result found</p>;

  const { style_profile, images, quiz_verstion } = state;

  return (
    <div className="quiz_results">
      <p>Quiz Version: {quiz_version}</p>

      <div className="results-images">
        {images.map((url, i) => (
          <img key={i} src={url} alt="Bridal style" />
        ))}
      </div>
    </div>
  );
}

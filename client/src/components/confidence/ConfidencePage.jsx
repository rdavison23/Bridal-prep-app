import { useParams, useNavigate } from 'react-router-dom';
import confidenceGuides from '../../data/confidenceData';
import './confidence.css';

function ConfidencePage() {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const guide = confidenceGuides.find((g) => g.id === guideId);
  const nextGuide = guide?.nextId
    ? confidenceGuides.find((g) => g.id === guide.nextId)
    : null;

  if (!guide) {
    return (
      <div className="confidence-not-found">
        <p>Guide not found.</p>
        <button onClick={() => navigate('/confidence')}>
          Back to all topics
        </button>
      </div>
    );
  }

  return (
    <div className="confidence-page">
      <button
        className="confidence-back"
        onClick={() => navigate('/confidence')}>
        ← Back to all topics
      </button>

      <p className="confidence-page-step">Guide {guide.step} of 05</p>
      <h1 className="confidence-page-title">{guide.title}</h1>

      {guide.isPepTalk ? (
        <div className="confidence-letter">
          {guide.letter.map((paragraph, index) => (
            <p key={index} className="confidence-letter-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <>
          <p className="confidence-page-opening">{guide.opening}</p>

          <div className="confidence-sections">
            {guide.sections.map((section, index) => (
              <div key={index} className="confidence-section">
                <h2 className="confidence-section-heading">
                  {section.heading}
                </h2>
                <p className="confidence-section-body">{section.body}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="confidence-callout">
        <p className="confidence-callout-text">{guide.callout}</p>
      </div>

      <p className="confidence-affirmation">{guide.affirmation}</p>

      {nextGuide && (
        <button
          className="confidence-next"
          onClick={() => navigate(nextGuide.route)}>
          <div>
            <span className="confidence-next-label">Up next</span>
            <span className="confidence-next-title">{nextGuide.title} →</span>
          </div>
        </button>
      )}
    </div>
  );
}

export default ConfidencePage;

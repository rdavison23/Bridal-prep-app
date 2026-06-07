import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import confidenceGuides from '../../data/confidenceData';
import './confidence.css';

function ConfidenceSection() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="confidence-hub">
        <div className="confidence-hero">
          <p className="confidence-eyebrow">Confidence center</p>
          <h1 className="confidence-hero-title">
            You're more ready than you think.
          </h1>
          <p className="confidence-hero-sub">
            Pick a topic that's on your mind. Each guide takes about 3 minutes to
            read.
          </p>
        </div>

        <div className="confidence-grid">
          {confidenceGuides.map((guide) => (
            <button
              key={guide.id}
              className={`confidence-card ${guide.isPepTalk ? 'confidence-card--pep' : ''
                }`}
              onClick={() => navigate(guide.route)}>
              <span className="confidence-card-step">{guide.step}</span>
              <h2 className="confidence-card-title">{guide.title}</h2>
              <p className="confidence-card-subtitle">{guide.subtitle}</p>
              <span className="confidence-card-cta">
                {guide.isPepTalk ? 'Read the letter' : 'Read guide'}
                <span aria-hidden="true"> →</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default ConfidenceSection;

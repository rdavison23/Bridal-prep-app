import { useNavigate } from 'react-router-dom';
import './HomeDashboard.css';

function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="dashboard-hero-text">
          <p className="dashboard-eyebrow">Bridal Prep</p>
          <h1 className="dashboard-title">From overwhelmed to confident.</h1>
          <p className="dashboard-subtitle">
            Discover your style, plan your budget, and walk into your
            appointment ready.
          </p>
          <button className="dashboard-cta" onClick={() => navigate('/login')}>
            Get started <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="dashboard-hero-image">
          <img
            src="https://images.pexels.com/photos/20352746/pexels-photo-20352746.jpeg"
            alt=""
            role="presentation"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;

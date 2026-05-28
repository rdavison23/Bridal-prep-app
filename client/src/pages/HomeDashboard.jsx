import { useNavigate } from 'react-router-dom';
import './HomeDashboard.css';

const features = [
  {
    step: '01',
    title: 'Discover Your Style',
    description: 'Find the silhouettes and styles that work for you.',
    route: '/quiz',
    cta: 'Take the quiz',
  },
  {
    step: '02',
    title: 'Plan Your Budget',
    description: 'Know your numbers before you walk into a boutique.',
    route: '/budget',
    cta: 'Plan my budget',
  },
  {
    step: '03',
    title: 'Build Your Confidence',
    description: 'Guides to calm your nerves and prepare your mind.',
    route: '/confidence',
    cta: 'Read the guides',
  },
  {
    step: '04',
    title: 'Prep Your Checklist',
    description: 'Everything you need to bring and do before your appointment.',
    route: '/checklist',
    cta: 'See my checklist',
  },
];

function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <p className="dashboard-eyebrow">Bridal Prep</p>
        <h1 className="dashboard-title">
          From overwhelmed to confident — before you ever step into a shop.
        </h1>
        <p className="dashboard-subtitle">
          Everything you need to discover your style, plan your budget, and walk
          into your appointment ready.
        </p>
        <button className="dashboard-cta" onClick={() => navigate('/quiz')}>
          Get started →
        </button>
      </div>

      <div className="dashboard-grid">
        {features.map((feature) => (
          <div
            key={feature.step}
            className="dashboard-card"
            onClick={() => navigate(feature.route)}>
            <span className="dashboard-card-step">{feature.step}</span>
            <h2 className="dashboard-card-title">{feature.title}</h2>
            <p className="dashboard-card-description">{feature.description}</p>
            <span className="dashboard-card-cta">{feature.cta} →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDashboard;

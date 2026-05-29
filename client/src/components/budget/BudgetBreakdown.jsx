import { useNavigate } from 'react-router-dom';
import './budget.css';

export default function BudgetBreakdown({ budget }) {
  const navigate = useNavigate();

  if (!budget) return null;

  return (
    <div className="budget-breakdown">
      <h3>Budget Breakdown</h3>

      <div className="breakdown-item">
        <strong>Ideal Budget:</strong> ${budget.idealBudget}
      </div>

      <div className="breakdown-item">
        <strong>Max Budget:</strong> ${budget.maxBudget}
      </div>

      <div className="breakdown-item">
        <strong>Hidden Costs Total:</strong> ${budget.hiddenCostsTotal}
      </div>

      <div className="breakdown-item">
        <strong>Final Estimate:</strong> ${budget.finalEstimate}
      </div>

      <button
        className="budget-checklist-btn"
        onClick={() => navigate('/checklist')}>
        Next: Prep Your Checklist <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

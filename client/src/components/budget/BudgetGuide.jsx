export default function BudgetGuide({ budget }) {
  if (!budget) return null;

  return (
    <div className="budget-guide">
      <h2>Your Budget Overview</h2>

      <p>
        <strong>Ideal Budget:</strong> ${budget.idealBudget}
      </p>
      <p>
        <strong>Max Budget:</strong> ${budget.maxBudget}
      </p>
      <p>
        <strong>Hidden Costs:</strong> ${budget.hiddenCostsTotal}
      </p>
      <p>
        <strong>Final Estimate:</strong> ${budget.finalEstimate}
      </p>
    </div>
  );
}

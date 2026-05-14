import useBudget from '../hooks/useBudget';

export default function BudgetPage() {
  const { budget, loading, error } = useBudget();

  if (loading) return <p>Loading your budget…</p>;
  if (error) return <p>Error: {error}</p>;
  if (!budget) return <p>No budget found. Create one to get started!</p>;

  return (
    <div className="budget-container">
      <h1>Your Budget Summary</h1>

      <div className="budget-card">
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
        <p>
          <strong>Created:</strong>{' '}
          {new Date(budget.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

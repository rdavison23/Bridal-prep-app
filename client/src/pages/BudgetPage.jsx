import useBudget from '../hooks/useBudget';
import BudgetBreakdown from '../components/budget/BudgetBreakdown';

export default function BudgetPage() {
  const { budget, loading, error } = useBudget();

  if (loading) return <p>Loading your budget…</p>;
  if (error) return <p>Error: {error}</p>;
  if (!budget) return <p>No budget found. Create one to get started!</p>;

  return (
    <div className="budget-container">
      <h1>Your Budget Summary</h1>
      <BudgetBreakdown budget={budget} />
    </div>
  );
}

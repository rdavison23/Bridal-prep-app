import useBudget from '../hooks/useBudget';
import BudgetGuide from '../components/budget/BudgetGuide';
import BudgetBreakdown from '../components/budget/BudgetBreakdown';
import Loader from '../components/ui/Loader';

export default function BudgetPage() {
  const { budget, loading, error } = useBudget();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!budget) return <p>No budget data available.</p>;

  return (
    <div className="budget-page">
      <BudgetGuide budget={budget} />
      <BudgetBreakdown budget={budget} />
    </div>
  );
}

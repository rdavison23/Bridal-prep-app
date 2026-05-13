import { useEffect, useState } from 'react';
import { getLatestBudget } from '../api/budgetApi';

export default function useBudget() {
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBudget() {
      try {
        const data = await getLatestBudget();
        setBudget(data);
      } catch (err) {
        setError(err.message || 'Failed to load budget');
      } finally {
        setLoading(false);
      }
    }

    loadBudget();
  }, []);

  return { budget, loading, error };
}

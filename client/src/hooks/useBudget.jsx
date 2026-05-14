import { useEffect, useState } from 'react';
import { getLatestBudget } from '../api/budgetApi';

export default function useBudget() {
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBudget() {
      try {
        const data = await getLatestBudget();

        if (data.empty) {
          setBudget(null);
        } else {
          setBudget(data.budget);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBudget();
  }, []);

  return { budget, loading, error };
}

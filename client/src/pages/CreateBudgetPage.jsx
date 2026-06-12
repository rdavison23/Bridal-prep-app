import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { previewBudget, createBudget } from '../api/budgetApi';

export default function CreateBudgetPage() {
  const navigate = useNavigate();
  const [idealBudget, setIdealBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  async function handlePreview(e) {
    e.preventDefault();
    setError(null);

    try {
      const data = await previewBudget({
        idealBudget: Number(idealBudget),
        maxBudget: Number(maxBudget),
      });
      setPreview(data);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSave() {
    setSaving(true);
    setError(null);

    try {
      await createBudget({
        idealBudget: Number(idealBudget),
        maxBudget: Number(maxBudget),
      });

      navigate('/budget'); // redirect to budget page
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      {' '}
      <div
        className="budget-form-container"
        style={{
          minHeight: '90vh',
        }}>
        <h1>Create Your Budget</h1>

        <form onSubmit={handlePreview}>
          <label>
            Ideal Budget
            <input
              type="number"
              value={idealBudget}
              onChange={(e) => setIdealBudget(e.target.value)}
              required
            />
          </label>

          <label>
            Maximum Budget
            <input
              type="number"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              required
            />
          </label>

          <button type="submit">Preview Budget</button>
        </form>

        {preview && (
          <div className="preview-card">
            <h2>Preview</h2>
            <p>
              <strong>Ideal:</strong> ${preview.idealBudget}
            </p>
            <p>
              <strong>Max:</strong> ${preview.maxBudget}
            </p>
            <p>
              <strong>Hidden Costs:</strong> ${preview.hiddenCostsTotal}
            </p>
            <p>
              <strong>Final Estimate:</strong> ${preview.finalEstimate}
            </p>

            <button onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save Budget'}
            </button>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </div>
      <Footer />
    </div>
  );
}

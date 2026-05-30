import { useNavigate } from 'react-router-dom';
import ChecklistItem from './ChecklistItem';
import useChecklist from '../../hooks/useChecklist';
import './checklist.css';

export default function Checklist({ userId }) {
  const navigate = useNavigate();
  const {
    items,
    loading,
    toggleItem,
    addItem,
    newItemText,
    setNewItemText,
    error,
    removeItem,
    resetAll,
  } = useChecklist(userId);

  if (loading) return <p className="checklist-loading">Loading checklist…</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  const completedCount = items.filter((item) => item.is_completed).length;
  const totalCount = items.length;
  const progressPercent =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="checklist-container">
      <div className="checklist-header">
        <h2 className="checklist-title">
          Your Bridal Prep <em>Checklist</em>
        </h2>
        <p className="checklist-progress-text">
          {completedCount} of {totalCount} completed
        </p>
      </div>

      <div className="checklist-progress-bar">
        <div
          className="checklist-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {error && <p className="checklist-error">{error}</p>}

      {items.length === 0 ? (
        <div className="checklist-empty">
          <p>No items yet — add your first one below.</p>
        </div>
      ) : (
        <ul className="checklist-list">
          {Array.isArray(items) &&
            items
              .filter((item) => item && item.id)
              .map((item) => (
                <ChecklistItem
                  key={item.id}
                  item={item}
                  onToggle={() => toggleItem(item.id)}
                  onDelete={() => removeItem(item.id)}
                />
              ))}
        </ul>
      )}

      <form className="checklist-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your own item…"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <button className="reset-btn" onClick={resetAll}>
        Reset checklist
      </button>

      <button
        className="checklist-confidence-btn"
        onClick={() => navigate('/confidence')}>
        Feeling nervous? Read the confidence guides{' '}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

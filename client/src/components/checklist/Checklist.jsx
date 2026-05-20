import ChecklistItem from './ChecklistItem';
import useChecklist from '../../hooks/useChecklist';
import './checklist.css';

export default function Checklist({ userId }) {
  const {
    items,
    loading,
    toggleItem,
    addItem,
    newItemText,
    setNewItemText,
    error,
  } = useChecklist(userId);
  userId;

  console.log('Items:', items);

  if (loading) return <p>Loading checklist…</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  return (
    <div className="checklist-container">
      <h2>Your Bridal Prep Checklist</h2>

      {error && <p className="error">{error}</p>}

      <ul className="checklist-list">
        {Array.isArray(items) &&
          items
            .filter((item) => item && item.id)
            .map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
      </ul>

      <form className="checklist-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new item…"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

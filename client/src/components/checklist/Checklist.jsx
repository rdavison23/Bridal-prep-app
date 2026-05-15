import { useState } from 'react';
import ChecklistItem from './ChecklistItem';
import useChecklist from '../../hooks/useChecklist';
import './checklist.css';

export default function Checklist({ userId }) {
  const { items, loading, toggleItem, addItem } = useChecklist(userId);
  const [newItem, setNewItem] = useState('');

  if (loading) return <p>Loading checklist…</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="checklist-container">
      <h2>Your Bridal Prep Checklist</h2>

      <ul className="checklist-list">
        {items.map((item) => (
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
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

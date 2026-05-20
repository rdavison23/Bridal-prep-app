export default function ChecklistItem({ item, onToggle, onDelete }) {
  return (
    <li className={`checklist-item ${item.is_completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={item.is_completed}
          onChange={onToggle}
        />
        {item.item_text}
      </label>
      <button className="delete-btn" onClick={onDelete}>
        X
      </button>
    </li>
  );
}

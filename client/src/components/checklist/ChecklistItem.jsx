export default function ChecklistItem({ item, onToggle, onDelete }) {
  return (
    <li className={`checklist-item ${item.is_completed ? 'completed' : ''}`}>
      <label className="checklist-label">
        <input
          type="checkbox"
          checked={item.is_completed}
          onChange={onToggle}
        />
        <span className="checklist-item-text">{item.item_text}</span>
      </label>
      <button
        className="delete-btn"
        onClick={onDelete}
        aria-label={`Delete ${item.item_text}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>
    </li>
  );
}

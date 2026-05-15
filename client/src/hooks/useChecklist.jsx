import { useEffect, useState } from 'react';
import {
  getChecklist,
  toggleChecklistItem,
  addChecklistItem,
} from '../api/checklistApi';

export default function useChecklist(userId) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getChecklist(userId);
        setItems(data);
      } catch (err) {
        console.error('Checklist load error:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [userId]);

  const toggleItem = async (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_completed: !item.is_completed } : item
      )
    );
    await toggleChecklistItem(id);
  };

  const addItem = async (text) => {
    const newItem = await addChecklistItem(userId, text);
    setItems((prev) => [...prev, newItem]);
  };

  return { items, loading, toggleItem, addItem };
}

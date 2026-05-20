import { useEffect, useState } from 'react';
import {
  getChecklist,
  toggleChecklistItem,
  addChecklistItem,
  deleteChecklistItem,
  resetChecklist,
} from '../api/checklistApi';
export default function useChecklist(userId) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItemText, setNewItemText] = useState('');
  const [error, setError] = useState(null);

  // Load checklist on mount
  useEffect(() => {
    async function load() {
      try {
        const data = await getChecklist(userId);
        setItems(data);
      } catch (err) {
        console.error('Checklist load error:', err);
        setError('Failed to load checklist.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [userId]);

  // Toggle item completion
  const toggleItem = async (itemId) => {
    // Optimistic UI update
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, is_completed: !item.is_completed }
          : item
      )
    );

    try {
      await toggleChecklistItem(userId, itemId);
    } catch (err) {
      console.error('Toggle error:', err);
      setError('Failed to update item.');
    }
  };

  // Add new item
  const addItem = async () => {
    if (!newItemText.trim()) {
      setError('Please enter an item before adding.');
      return;
    }

    try {
      const newItem = await addChecklistItem(userId, newItemText.trim());
      setItems((prev) => [...prev, newItem]);
      setNewItemText('');
    } catch (err) {
      console.error('Add item error:', err);
      setError(err.message);
    }
  };

  // DELETE item
  const removeItem = async (itemId) => {
    try {
      await deleteChecklistItem(userId, itemId);
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    } catch (err) {
      console.error('Delete error:', err);
      setError('Failed to delete item.');
    }
  };

  //RESET item
  const resetAll = async () => {
    try {
      const result = await resetChecklist(userId);
      setItems(result.items);
      window.location.reload(); //the list was taking too long to load and this helps
    } catch (err) {
      console.error('Reset error', err);
      setError('Failed to reset checklist.');
    }
  };

  return {
    items,
    loading,
    error,
    newItemText,
    setNewItemText,
    addItem,
    toggleItem,
    removeItem,
    resetAll,
  };
}

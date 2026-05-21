import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Checklist from '../Checklist.jsx';
import * as api from '../../../api/checklistApi.js';

test('loads and displays checklist items', async () => {
  vi.spyOn(api, 'getChecklist').mockResolvedValue([
    { id: 1, item_text: 'Test item', is_completed: false, user_id: 1 },
  ]);

  render(<Checklist userId={1} />);

  const item = await screen.findByText('Test item');
  expect(item).toBeInTheDocument();
});

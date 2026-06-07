import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Checklist from '../Checklist.jsx';
import * as api from '../../../api/checklistApi.js';

test('loads and displays checklist items', async () => {
  vi.spyOn(api, 'getChecklist').mockResolvedValue([
    { id: 1, item_text: 'Test item', is_completed: false, user_id: 1 },
  ]);

  render(
    <MemoryRouter>
      <Checklist userId={1} />
    </MemoryRouter>
  );

  const item = await screen.findByText('Test item');
  expect(item).toBeInTheDocument();
});

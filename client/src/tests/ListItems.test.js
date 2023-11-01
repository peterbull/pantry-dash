import { render, screen, waitFor } from '@testing-library/react';
import ListItems from '../components/ListItems';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Milk', quantity: 2, low_quantity: 1 }]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test('fetches and displays items', async () => {
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: 'Milk', quantity: 2, low_quantity: 1 }]),
    })
  );

  render(<ListItems />);

  const itemElement = await screen.findByText('Milk');

  expect(itemElement).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);
});


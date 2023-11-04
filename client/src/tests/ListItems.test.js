import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItems from '../components/ListItems';
import { ItemsContext } from '../contexts/ItemsContext';

// Mock data for tests
const mockItems = [
  { id: 1, name: 'Apples', quantity: 3, low_quantity: 1 },
];

// Custom render function to wrap components with context provider
const renderWithItemsContext = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <ItemsContext.Provider value={providerProps}>{ui}</ItemsContext.Provider>,
    renderOptions
  );
};

describe('ListItems Component', () => {
  it('renders correctly with items', () => {
    const providerProps = {
      items: mockItems,
      setItems: jest.fn(),
    };

    renderWithItemsContext(<ListItems />, { providerProps });

    // Check if the items are rendered
    mockItems.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

});


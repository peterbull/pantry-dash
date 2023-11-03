import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { ItemsProvider } from "../contexts/ItemsContext";
import ListItems from '../components/ListItems';

describe('ListItems Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <ItemsProvider>
        <ListItems />
      </ItemsProvider>
    );

    expect(getByText('Pantry Inventory')).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <ItemsProvider>
        <ListItems />
      </ItemsProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  })
});
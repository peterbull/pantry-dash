import React from 'react';
import ShoppingList from "./ShoppingList";
import MostPurchasedItems from "./MostPurchasedItems";
import ListItems from "./ListItems";


/**
 * Renders the Pantry Dashboard component.
 * @returns {JSX.Element} The Pantry Dashboard component.
 */
const PantryDashboard = () => {
  return (
    <div className="container fw-light">
      <h1 className="text-center">Pantry Dashboard</h1>
      <div className="row">
        <div className='col'>
          <MostPurchasedItems />
          <ShoppingList />
        </div>
        <div className='col'>
          <ListItems />
        </div>
      </div>
      <footer className="text-muted text-center fw-light">Placeholder</footer>
    </div>
  );
};

export default PantryDashboard;
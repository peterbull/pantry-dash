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
      <div className="container mt-4">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Pantry Dash!</h1>
          <p className="lead">Streamline your pantry management with our intuitive digital assistant.</p>
          <hr className="my-4" />
          <p>Here's how to navigate your Pantry Dashboard:</p>
          <ul className="list-group">
            <li className="list-group-item">Overview of Inventory: Check your current stock, how much you have, and when it's time to restock.</li>
            <li className="list-group-item">Add New Items: Easily add new items with their name, quantity, and 'Restock Level'.</li>
            <li className="list-group-item">Update Quantities: Directly adjust the quantities on your dashboard; changes save as you go.</li>
            <li className="list-group-item">Remove Items: Click to remove items you've used up or no longer need.</li>
            <li className="list-group-item">Search for Items: Use the search bar to quickly find items in your pantry.</li>
            <li className="list-group-item">Shopping List: See items at or below the 'Restock Level' and download the list for shopping.</li>
            <li className="list-group-item">Most Purchased: View the items you restock most often in the 'Most Purchased' section.</li>
          </ul>
          <p className="mt-4">Stay organized and well-stocked with Pantry Dash. We're here to ensure you always have what you need, right when you need it.</p>
        </div>
      </div>


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
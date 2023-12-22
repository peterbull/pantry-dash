import React from "react";
import ShoppingList from "./ShoppingList";
import MostPurchasedItems from "./MostPurchasedItems";
import ListItems from "./ListItems";

/**
 * Renders the Pantry Dashboard component.
 * @returns {JSX.Element} The Pantry Dashboard component.
 */
const PantryDashboard = () => {
  return (
    <div className="container fw-light mt-4">
      {/* <div className="container mt-4"> */}
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Pantry Dash!</h1>
        <p className="lead">
          Streamline your pantry management with our intuitive digital
          assistant.
        </p>
        <hr className="my-4" />
        <p>Here's how to navigate your Pantry Dashboard:</p>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            Overview of Inventory: Check your current stock, how much you have,
            and when it's time to restock.
          </li>
          <li className="list-group-item list-group-item-action">
            Add New Items: Easily add new items with their name, quantity, and
            'Restock Level'.
          </li>
          <li className="list-group-item list-group-item-action">
            Update Quantities: Directly adjust the quantities on your dashboard;
            changes save as you go.
          </li>
          <li className="list-group-item list-group-item-action">
            Remove Items: Click to remove items you've used up or no longer
            need.
          </li>
          <li className="list-group-item list-group-item-action">
            Search for Items: Use the search bar to quickly find items in your
            pantry.
          </li>
          <li className="list-group-item list-group-item-action">
            Shopping List: See items at or below the 'Purchase More' quantity
            and download the list for shopping.
          </li>
          <li className="list-group-item list-group-item-action">
            Most Purchased: View the items you restock most often in the 'Most
            Purchased' section.
          </li>
        </ul>
        <p className="mt-4">
          Stay organized and well-stocked with Pantry Dash. We're here to ensure
          you always have what you need, right when you need it.
        </p>
        {/* </div> */}
      </div>

      <div className="row mt-4">
        <div className="col">
          <MostPurchasedItems />
          <div className="mt-4">
            <ShoppingList />
          </div>
        </div>
        <div className="col">
          <ListItems />
        </div>
      </div>
      <footer className="text-muted text-center fw-light">Placeholder</footer>
    </div>
  );
};

export default PantryDashboard;

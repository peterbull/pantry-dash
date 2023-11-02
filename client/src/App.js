import React, { Fragment } from "react";
import './App.css';
import ListItems from "./components/ListItems";
import ShoppingList from "./components/ShoppingList";
import { ItemsProvider } from "./contexts/ItemsContext";
import MostPurchasedItems from "./components/MostPurchasedItems";

function App() {
  return (
    <ItemsProvider>
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <ShoppingList />
            </div>
            <div className="col">
              <MostPurchasedItems />
            </div>
            <div className="row">
              <div className="col">
                <ListItems />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </ItemsProvider>
  );
}

export default App;

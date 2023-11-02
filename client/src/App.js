import React, { Fragment } from "react";
import './App.css';
import ListItems from "./components/ListItems";
import ShoppingList from "./components/ShoppingList";
import { ItemsProvider } from "./contexts/ItemsContext";

function App() {
  return (
    <ItemsProvider>
      <Fragment>
        <div className="container">
          <div className="col align-self-center">
            <ShoppingList />
            <ListItems />
          </div>
        </div>
      </Fragment>
    </ItemsProvider>
  );
}

export default App;

import React, { Fragment } from "react";
import './App.css';
import ListItems from "./components/ListItems";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <Fragment>
      <div className="container">
          <div className="col align-self-center">
            <ShoppingList />
            <ListItems />
          </div>
        </div>
    </Fragment>
  )
}

export default App;

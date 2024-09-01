/**
 * This module defines a context provider for items. It exports an ItemsContext object and an ItemsProvider component.
 * @module ItemsContext
 */

import React, { createContext, useState, useEffect } from "react";

/**
 * ItemsContext object created using createContext() method from React.
 * @type {object}
 * @property {array} items - An array of items.
 * @property {function} setItems - A function to set the items array.
 */
const ItemsContext = createContext();

/**
 * ItemsProvider component that provides the items context to its children.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ItemsProvider.
 * @returns {JSX.Element} - The JSX element representing the ItemsProvider component.
 */
const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    /**
     * Fetches the items from the server and sets the items state.
     * @async
     * @function fetchItems
     */
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://${process.env.REACT_APP_DB_SERVER}:3001/items`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };

import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import CSVDownloader from './CSVDownload';


/**
 * Renders a shopping list component with low quantity items and a CSV downloader.
 * @returns {JSX.Element} The shopping list component.
 */
const ShoppingList = () => {
  const { items } = useContext(ItemsContext);

  const lowQuantityItems = items.filter(item =>
    parseFloat(item.quantity) <= parseFloat(item.low_quantity
    ));

  return (
    <div className="container fw-light">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="display-6">Shopping List</h2>
        <CSVDownloader data={lowQuantityItems} filename="shopping-list.csv" />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Low Quantity</th>
          </tr>
        </thead>
        <tbody>
          {lowQuantityItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.low_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;

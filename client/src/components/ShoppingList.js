import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import CSVDownloader from './CSVDownload';


const ShoppingList = () => {
  const { items } = useContext(ItemsContext);

  const lowQuantityItems = items.filter(item =>
    parseFloat(item.quantity) <= parseFloat(item.low_quantity
    ));

  return (
    <div className="container mt-3">
      <h2>Shopping List  -- <CSVDownloader data={lowQuantityItems} filename="shopping-list.csv" /></h2>
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

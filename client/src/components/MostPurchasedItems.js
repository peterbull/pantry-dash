import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

const MostPurchasedItems = () => {
  const { items } = useContext(ItemsContext);

  // Sort items based on increase_count in descending order and take the top 5
  const mostPurchasedItems = items
    .sort((a, b) => b.increase_count - a.increase_count)
    .slice(0, 5);

  return (
    <div className="container mt-3">
      <h2>Most Purchased Items</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Low Quantity</th>
            <th>Increased Count</th>
          </tr>
        </thead>
        <tbody>
          {mostPurchasedItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.low_quantity}</td>
              <td>{item.increase_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostPurchasedItems;

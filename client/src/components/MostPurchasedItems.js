import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';


/**
 * Renders a table of the top 5 most purchased items based on increase_count.
 * @returns {JSX.Element} MostPurchasedItems component
 */
const MostPurchasedItems = () => {
  const { items } = useContext(ItemsContext);

  // Sort items based on increase_count in descending order and take the top 5
  const mostPurchasedItems = items
    .sort((a, b) => b.increase_count - a.increase_count)
    .slice(0, 5);

  return (
    <div className="container fw-light">
      <h2 className="display-6">Most Purchased Items</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Times Purchased</th>
          </tr>
        </thead>
        <tbody>
          {mostPurchasedItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.increase_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostPurchasedItems;

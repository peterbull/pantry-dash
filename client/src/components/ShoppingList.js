import React, { useEffect, useState, useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';


const ShoppingList = () => {
  const { items } = useContext(ItemsContext);

  const lowQuantityItems = items.filter(item =>
    parseFloat(item.quantity) <= parseFloat(item.low_quantity
    ));

  return (
    <div className="container mt-3">
      <h2>Shopping List</h2>
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

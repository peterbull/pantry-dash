import React, { Fragment, useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

/**
 * EditItem Component
 * Allows for the editing of individual items in the inventory.
 * @param {Object} item - The item to be edited.
 * @param {Function} deleteItem - Function to delete the item.
 * @returns {JSX.Element} The EditItem component.
 */
const EditItem = ({ item, deleteItem }) => {
  const { items, setItems } = useContext(ItemsContext);
  const [fields, setFields] = useState({
    name: item.name,
    quantity: item.quantity,
    low_quantity: item.low_quantity,
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const updateItem = async (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // Only update if the field has changed
    if (fieldValue !== item[fieldName]) {
      try {
        const body = { [e.target.name]: e.target.value };
        const response = await fetch(
          `http://${process.env.REACT_APP_DB_SERVER}:3001/items/${item.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );

        // Update state if the update was successful
        if (response.ok) {
          const jsonData = await response.json();
          setFields({
            ...fields,
            [e.target.name]: jsonData[e.target.name],
          });
          const updatedItems = items.map((i) =>
            i.id === item.id ? jsonData : i
          );
          setItems(updatedItems);
          console.log("item updated");
        }
      } catch (err) {
        // Log any errors
        console.error(err.message);
      }
    }
  };

  return (
    <Fragment>
      {/* Input for editing the name */}
      <td className="text-center fw-light">{fields.name}</td>
      {/* Input for editing the quantity */}
      <td>
        <input
          type="number"
          name="quantity"
          value={fields.quantity}
          className="form-control text-center fw-light"
          onChange={updateField}
          onBlur={updateItem}
          required
        />
      </td>
      {/* Input for editing the low quantity level */}
      <td>
        <input
          type="number"
          name="low_quantity"
          value={fields.low_quantity}
          className="form-control text-center fw-light"
          onChange={updateField}
          onBlur={updateItem}
          required
        />
      </td>
      {/* Button to delete the item */}
      <td>
        <button
          className="btn btn-secondary"
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </button>
      </td>
    </Fragment>
  );
};

export default EditItem;

import React, { Fragment, useState } from "react";

/**
 * CreateItem Component
 * Allows for the creation of new items in the inventory.
 * @param {Function} onItemCreated - Callback to notify parent component of a new item.
 * @returns {JSX.Element} The CreateItem component.
 */
const CreateItem = ({ onItemCreated }) => {
  // State to hold the fields for the new item
  const [fields, setFields] = useState({
    name: "",
    quantity: "",
    low_quantity: "",
  });

  // Function to update individual fields
  const updateField = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  // Function to create a new item on the server
  const createItem = async (e) => {
    e.preventDefault();
    try {
      const body = fields;
      const response = await fetch(
        `http://${process.env.REACT_APP_DB_SERVER}:3001/items`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      // Notify parent component if the creation was successful
      if (response.ok) {
        const newItem = await response.json();
        onItemCreated(newItem);

        // Reset the fields
        setFields({
          name: "",
          quantity: "",
          low_quantity: "",
        });
      }
    } catch (err) {
      // Log any errors
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* Input for entering the name */}
      <td>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fields.name}
          className="form-control fw-light text-center"
          onChange={updateField}
          required
        />
      </td>
      {/* Input for entering the quantity */}
      <td>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={fields.quantity}
          className="form-control fw-light text-center"
          onChange={updateField}
          required
        />
      </td>
      {/* Input for entering the low quantity level */}
      <td>
        <input
          type="number"
          name="low_quantity"
          placeholder="Low Quantity"
          value={fields.low_quantity}
          className="form-control fw-light text-center"
          onChange={updateField}
          required
        />
      </td>
      {/* Button to create the new item */}
      <td>
        <button type="submit" className="btn btn-dark" onClick={createItem}>
          Create
        </button>
      </td>
    </Fragment>
  );
};

export default CreateItem;

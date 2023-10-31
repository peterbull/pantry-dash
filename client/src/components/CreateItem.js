import React, { Fragment, useState } from "react";

const CreateItem = () => {
  const [fields, setFields] = useState({
    name: "",
    quantity: "",
    low_quantity: ""
  });

  const updateField = e => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
  };

  const createItem = async e => {
    e.preventDefault();
    try {
      const body = fields;
      const response = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        console.log("Item created");
        setFields({
          name: "",
          quantity: "",
          low_quantity: ""
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <td>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={updateField}
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={fields.quantity}
          onChange={updateField}
        />
      </td>
      <td>
        <input
          type="text"
          name="low_quantity"
          placeholder="Low Quantity"
          value={fields.low_quantity}
          onChange={updateField}
        />
      </td>
      <button type="submit" className="btn" onClick={createItem}>Create</button>
    </Fragment>
  );
};

export default CreateItem;
import React, { Fragment, useState } from "react";

/**
 * EditItem Component
 * Allows for the editing of individual items in the inventory.
 * @param {Object} item - The item to be edited.
 * @param {Function} deleteItem - Function to delete the item.
 * @returns {JSX.Element} The EditItem component.
 */
const EditItem = ({ item, deleteItem }) => {
	// State to hold the fields of the item
	const [fields, setFields] = useState({
		name: item.name,
		quantity: item.quantity,
		low_quantity: item.low_quantity
	});

	// Function to update individual fields
	const updateField = e => {
		const { name, value } = e.target;
		setFields({
			...fields,
			[name]: value
		});
	};

	// Function to update the item on the server
	const updateItem = async e => {
		e.preventDefault();
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		// Only update if the field has changed
		if (fieldValue !== item[fieldName]) {
			try {
				const body = { [e.target.name]: e.target.value };
				const response = await fetch(`http://localhost:5000/items/${item.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body)
				});

				// Update state if the update was successful
				if (response.ok) {
					const jsonData = await response.json();
					setFields({
						...fields,
						[e.target.name]: jsonData[e.target.name]
					});

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
			<td className="text-center fw-light">
				{fields.name}
			</td>
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
				<button className="btn btn-secondary" onClick={() => deleteItem(item.id)}>Delete</button>
			</td>
		</Fragment>
	);
};

export default EditItem;
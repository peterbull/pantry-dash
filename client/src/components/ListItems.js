import React, { Fragment, useState, useEffect } from "react";
import EditItem from "./EditItem";
import CreateItem from "./CreateItem";

/**
 * Renders a table of pantry inventory items with the ability to add, edit, and delete items.
 * @returns {JSX.Element} The ListItems component.
 */
const ListItems = () => {
	// State for storing the list of items
	const [items, setItems] = useState([]);

	// Function to delete an item by ID
	const deleteItem = async (id) => {
		try {
			// Sending DELETE request to the server
			const deleteItem = await fetch(`http://localhost:5000/items/${id}`, {
				method: "DELETE"
			});

			// Update the state to remove the deleted item
			setItems(items.filter(item => item.id !== id));
		} catch (err) {
			// Log any errors
			console.log(err.message);
		}
	};

	// Function to fetch all items from the server
	const getItems = async () => {
		try {
			// Sending GET request to the server
			const response = await fetch("http://localhost:5000/items");
			const jsonData = await response.json();

			// Update the state with the fetched items
			setItems(jsonData);
		} catch (err) {
			// Log any errors
			console.error(err.message);
		}
	};

	// Function to handle the creation of a new item
	const handleItemCreated = async (newItem) => {
		// Update the state to include the new item
		setItems([newItem, ...items]);
	};

	// Fetch items when the component mounts
	useEffect(() => {
		getItems();
	}, []);

	return (
		<Fragment>
			<div className="table-container">
				<h3 className="text-center mt-5">Pantry Inventory</h3>
				<table className="table table-sm table-hover mt-5 text-center responsive-sm">
					<thead>
						<tr>
							<th>Name</th>
							<th>Qty.</th>
							<th>Purchase More at</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{/* CreateItem component for adding new items */}
							<CreateItem onItemCreated={handleItemCreated} />
						</tr>
						{/* Loop through items and render EditItem component for each */}
						{items.map((item) =>
							<tr key={item.id}>
								<EditItem item={item} deleteItem={deleteItem} />
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default ListItems;

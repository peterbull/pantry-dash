import React, { Fragment, useState, useEffect, useContext } from "react";
import EditItem from "./EditItem";
import CreateItem from "./CreateItem";
import { ItemsContext } from "../contexts/ItemsContext";

/**
 * Renders a table of pantry inventory items with the ability to add, edit, and delete items.
 * @returns {JSX.Element} The ListItems component.
 */
const ListItems = () => {
	// Get the items and setItems function from the context
	const { items, setItems } = useContext(ItemsContext);

	// Function to delete an item by ID
	const deleteItem = async (id) => {
		try {
			const deleteItem = await fetch(`http://localhost:5000/items/${id}`, {
				method: "DELETE"
			});

			if (deleteItem.ok) {
				// Update the items in the context
				setItems(prevItems => prevItems.filter(item => item.id !== id));
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	// Function to handle the creation of a new item
	const handleItemCreated = (newItem) => {
		// Update the items in the context
		setItems(prevItems => [newItem, ...prevItems]);
	};

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

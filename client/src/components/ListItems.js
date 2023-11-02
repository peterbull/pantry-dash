import React, { Fragment, useState, useEffect, useRef, useContext } from "react";
import EditItem from "./EditItem";
import CreateItem from "./CreateItem";
import { ItemsContext } from "../contexts/ItemsContext";
import SearchBar from "./SearchBar";

/**
 * Renders a table of pantry inventory items with the ability to add, edit, and delete items.
 * @returns {JSX.Element} The ListItems component.
 */
const ListItems = () => {
	// Get the items and setItems function from the context
	const { items, setItems } = useContext(ItemsContext);
	const [query, setQuery] = useState("");

	const listContainerRef = useRef(null);


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

	// Filter items based on the search query
	const filteredItems = items.filter(item =>
		item.name.toLowerCase().includes(query.toLowerCase())
	);

	useEffect(() => {
		const currentScrollPosition = listContainerRef.current?.scrollTop;
		if (typeof currentScrollPosition === 'number') {
			listContainerRef.current.scrollTop = currentScrollPosition;
		}
	}, [filteredItems]);


	return (
		<Fragment>
			<div ref={listContainerRef} className="table-container">
				<h3 className="text-center">Pantry Inventory</h3>
				<SearchBar query={query} setQuery={setQuery} />
				<table className="table table-sm table-hover text-center responsive-sm">
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
						{filteredItems.map((item) =>
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

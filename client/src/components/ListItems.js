import React, { Fragment, useState, useEffect } from "react";
import EditItem from "./EditItem";
import CreateItem from "./CreateItem";

const ListItems = () => {
	const [items, setItems] = useState([]);

	const deleteItem = async (id) => {
		try {
			const deleteItem = await fetch(`http://localhost:5000/${id}`, {
				method: "DELETE"
			});

			setItems(items.filter(item => item.id !== id));
		} catch (err) {
			console.log(err.message);
		}
	};

	const getItems = async () => {
		try {
			const response = await fetch("http://localhost:5000/items");
			const jsonData = await response.json();

			setItems(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleItemCreated = async (newItem) => {
		setItems([newItem, ...items]);
	};

	useEffect(() => {
		getItems();
	},
		[]);

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
							<CreateItem onItemCreated={handleItemCreated}/>
						</tr>
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
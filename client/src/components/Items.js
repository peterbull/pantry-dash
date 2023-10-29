import React, { Fragment, useState, useEffect } from "react";

const ListItems = () => {
	const [items, setItems] = useState([]);

	const getItems = async () => {
		try {

			const response = await fetch("http://localhost:5000/items");
			const jsonData = await response.json();

			setItems(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getItems();
	},
		[]);

	return <Fragment>
		<h1 className="text-center mt-5">Items</h1>
		<div>
			<table className="table mt-5 text-center">
				<thead>
					<tr>
						<th>Name</th>
						<th>Qty.</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.quantity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</Fragment>;

};

export default ListItems;
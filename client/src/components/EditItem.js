import React, { Fragment, useState } from "react";

const EditItem = ({ item }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [fields, setFields] = useState({
		name: item.name,
		quantity: item.quantity
	});

	const toggleEditable = () => {
		setIsEditable(!isEditable);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFields({
			...fields,
			[name]: value,
		});
	};

	const updateItem = async e => {
		e.preventDefault();
		try {
			const body = { name: fields.name, quantity: fields.quantity }
			const response = await fetch(`http://localhost:5000/items/${item.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});

			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	}



	return (
		<Fragment>
			<td>
				{isEditable ?
					<input type="text" className="form-control" name="name" value={fields.name} onChange={handleInputChange} />
					: item.name}
			</td>
			<td>
				{isEditable ?
					<input type="number" name="quantity" className="form-control" value={fields.quantity} onChange={handleInputChange} />
					: item.quantity}
			</td>
			<td>
				{isEditable && <button type="button" className="btn btn-dark" 
												onClick={updateItem}>
													Save
												</button>}
				{isEditable ?
					<button type="button" className="btn btn-light" onClick={toggleEditable}>Cancel</button>
					: <button type="button" className="btn btn-secondary" onClick={toggleEditable}>Edit</button>
				}		
			</td>
		</Fragment>
	);
};





export default EditItem;

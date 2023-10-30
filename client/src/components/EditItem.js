import React, { Fragment, useState } from "react";

const EditItem = ({ item }) => {
	const [isEditable, setIsEditable] = useState([]);
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

	const updateItem = (id) => {

	}



	return (
		<Fragment>
			<td>
				{isEditable ?
					<input type="text" name="name" value={fields.name} onChange={handleInputChange} />
					: item.name}
			</td>
			<td>
				{isEditable ?
					<input type="number" name="quantity" value={fields.quantity} onChange={handleInputChange} />
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

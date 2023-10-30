import React, { Fragment, useState } from "react";

const EditItem = ({ item }) => {
	const [isEditable, setIsEditable] = useState([]);
	const [fields, setFields] = useState({
		name: item.name,
		quantity: item.quantity,
		low_quantity: item.low_quantity
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




	return (
		<Fragment>
			<td></td>
		</Fragment>
	);
};





export default EditItem;

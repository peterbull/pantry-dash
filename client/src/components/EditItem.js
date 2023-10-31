import React, { Fragment, useState } from "react";

const EditItem = ({ item }) => {
	const [fields, setFields] = useState({
		name: item.name,
		quantity: item.quantity,
		low_quantity: item.low_quantity
	});


	const updateField = e => {
		const { name, value } = e.target;
		setFields({
			...fields,
			[name]: value
		});
	};

	const updateItem = async e => {
		e.preventDefault();
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		if (fieldValue !== item[fieldName]) {
			try {
				const body = { [e.target.name]: e.target.value };
				const response = await fetch(`http://localhost:5000/items/${item.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body)
				});

				if (response.ok) {
					const jsonData = await response.json();
					setFields({
						...fields,
						[e.target.name]: jsonData[e.target.name]
					});

					console.log("item updated");
				}

			} catch (err) {
				console.error(err.message);
			}
		}
	};



	return (
		<Fragment>
			<td>
				<input
					type="text"
					name="name"
					value={fields.name}
					className="form-control text-center"
					onChange={updateField}
					onBlur={updateItem}
				/>
			</td>
			<td>
				<input
					type="text"
					name="quantity"
					value={fields.quantity}
					className="form-control text-center"
					onChange={updateField}
					onBlur={updateItem}
				/>
			</td>
			<td>
				<input
					type="text"
					name="low_quantity"
					value={fields.low_quantity}
					className="form-control text-center"
					onChange={updateField}
					onBlur={updateItem}
				/>
			</td>

		</Fragment>
	);
};





export default EditItem;

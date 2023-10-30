import React, { Fragment, useState } from "react";

const EditItem = ({ item }) => {
	const [isEditable, setIsEditable] = useState([]);


	const toggleEditable = () => {
		setIsEditable(!isEditable);
	};

	


	return(
		<Fragment>
			<td></td>
		</Fragment>
	)
};





export default EditItem;

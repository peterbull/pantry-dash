import React, { Fragment, useState, useEffect } from "react";
import EditItem from "./EditItem";

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

	useEffect(() => {
		getItems();
	},
		[]);

return (
  <Fragment>
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
          {items.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
              <td>
                <EditItem item={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Fragment>
)};

export default ListItems;
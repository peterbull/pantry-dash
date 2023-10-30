const express = require("express");

const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");
const moment = require("moment");



// middleware
app.use(cors());
app.use(express.json()); //req.body


// landing page
app.get("/", async (req, res) => {
	res.send("Landing Page");
});


// get all items
app.get("/items", async (req, res) => {
	try {
		const allItems = await pool.query(
			"SELECT * FROM items"
		);

		res.json(allItems.rows);
	} catch (err) {
		console.error(err.message);
	}
});


// get an item
app.get("/items/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const item = await pool.query(
			"SELECT * FROM items WHERE id = $1",
			[id]
		);

		res.json(item.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});


// create an item
app.post("/items", async (req, res) => {
	try {
		const keys = Object.keys(req.body);
		const values = Object.values(req.body);

		// create value parameter placeholders for pg
		const placeholders = keys.map((_, index) => `$${index + 1}`).join(", ");
		const query = `INSERT INTO items (${keys.join(", ")}) VALUES (${placeholders}) RETURNING *`
		
		const newItem = await pool.query(query, values);

		res.json(newItem.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});


// update an item
app.put("/items/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const keys = Object.keys(req.body);
		const values = Object.values(req.body);

		// map keys to parameters
		const setQuery = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");

		// append id 
		values.push(id);

		const query = `UPDATE items SET ${setQuery} WHERE id = $${values.length}`;


		const updateItem = await pool.query(query, values);

		res.json("Item updated");
	} catch (err) {
		console.error(err.message);
	}
});

app.delete("/items/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteItem = await pool.query(
			"DELETE FROM items WHERE id = $1 RETURNING *",
			[id]
		);

		res.json(`DELETED -- ${deleteItem.rows[0].name}`);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

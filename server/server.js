const express = require("express");

const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");
const moment = require("moment");



// Middleware
app.use(cors());
app.use(express.json()); //req.body


// Landing page
app.get("/", async (req, res) => {
	res.send("Landing Page");
});


// Get all items
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


// Get an item
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


// Create an item
app.post("/items", async (req, res) => {
	try {
		const keys = Object.keys(req.body);
		const values = Object.values(req.body);

		// Create value parameter placeholders for pg
		const placeholders = keys.map((_, index) => `$${index + 1}`).join(", ");
		const query = `INSERT INTO items (${keys.join(", ")}) VALUES (${placeholders}) RETURNING *`
		
		const newItem = await pool.query(query, values);

		res.json(newItem.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});


// Update an item
app.put("/items/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const keys = Object.keys(req.body);
		const values = Object.values(req.body);

		// Map keys to parameters
		const setQuery = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");

		// Append id
		values.push(id);

		const query = `UPDATE items SET ${setQuery} WHERE id = $${values.length} RETURNING *`;


		const updateItem = await pool.query(query, values);

		res.json(updateItem.rows[0]);
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

module.exports = app;

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
})

app.post("/items", async (req, res) => {
    try {
        const { name } = req.body;
        const newItem = await pool.query(
            "INSERT INTO items (name) VALUES ($1) RETURNING *",
            [name]
        );

        res.json(newItem.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

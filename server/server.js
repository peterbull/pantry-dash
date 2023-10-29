const express = require("express");

const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");
const moment = require("moment");



// middleware
app.use(cors());
app.use(express.json()); //req.body



app.get("/", async (req, res) => {
    res.send("Landing Page");
});

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

app.post("/items", async (req, res) => {
    try {
        const { name } = req.body;
        const newItem = await pool.query(
            "INSERT INTO items (name, quantity, ) ")
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

require('dotenv').config();
const dbPass = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const Pool = require("pg").Pool;

const pool = new Pool({
    user: dbUser,
    password: dbPass,
    host: 'db',
    port: 5432,
    database: dbName
});

module.exports = pool;
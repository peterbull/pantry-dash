require('dotenv').config();
const dbPass = process.env.POSTGRES_PASSWORD;
const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: dbPass,
    host: 'db',
    port: 5432,
    database: 'pantry_dash'
});

module.exports = pool;
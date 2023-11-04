require('dotenv').config();
const dbPass = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const { Client } = require('pg');

// Configure the connection parameters
const client = new Client({
  user: dbUser,
  host: 'db', // Use the service name defined in Docker Compose
  database: dbName,
  password: dbPass,
  port: 5432,
});

async function testConnection() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to PostgreSQL database');

    // Run a simple query
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);

    // Close the connection
    await client.end();
  } catch (err) {
    console.error('Connection to PostgreSQL failed', err);
  }
}

testConnection();

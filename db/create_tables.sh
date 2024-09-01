#!/bin/bash

# Print environment variables for debugging
echo "DB_USER: $POSTGRES_USER"
echo "DB_NAME: $POSTGRES_DB"

# Wait for PostgreSQL to be ready
echo "Checking PostgreSQL readiness..."
until pg_isready; do
  echo "Waiting for PostgreSQL..."
  sleep 5
done

echo "PostgreSQL is ready. Executing the SQL script..."

# Sleep for an additional 10 seconds
echo "Sleeping for 10 seconds before executing the SQL script..."
sleep 10

# Execute the SQL script to create tables
echo "Executing SQL script to create tables..."
psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/create_tables.sql

echo "SQL script executed successfully."

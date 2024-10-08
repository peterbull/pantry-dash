![Pantry Dash Screenshot](pantry_dash.png)

# Pantry Dash

Pantry Dash is a comprehensive pantry management application designed to streamline the tracking and replenishing of kitchen inventory. Built with the PERN stack (PostgreSQL, Express, React, Node.js), it provides an intuitive user interface for monitoring stock levels, updating inventory, and generating shopping lists.

## Features

- **Inventory Overview**: Monitor stock levels and determine when to restock.
- **Item Management**: Add, edit, and remove items from your inventory.
- **Quantity Tracking**: Adjust item quantities with immediate dashboard updates.
- **Search Functionality**: Quickly find items using the search bar.
- **Shopping List Generation**: Identify low stock items and download the list for shopping.
- **Insights**: View the most frequently purchased items for better inventory planning.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker

### Installing

1. Clone the repository.

```bash
git clone https://github.com/peterbull/pantry-dash.git
```

2. Ensure Docker is running on your system.

3. Navigate to the project directory

```bash
cd pantry-dash
```

4. Set up the environment variables by copying `.env.example` to `.env` and filling in your details.

```bash
cp .env.example .env
```

5. Run the following command to build and run the application:

```bash
docker compose up --build
```

The application should now be running on:

- Client: `http://localhost:80`
- Server: `http://localhost:3001`

## Authors

- **Peter Bull** - _Initial work_

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

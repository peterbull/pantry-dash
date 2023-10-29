-- Active: 1697879903440@@localhost@5432@pantry_dash@public

CREATE TABLE
    categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    )

CREATE TABLE
    stores (
        id SERIAL PRIMARY KEY,
        store VARCHAR(30) NOT NUll
    )

CREATE TABLE
    items (
        id SERIAL PRIMARY KEY,
        create_time DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(255) NOT NULL,
        quantity NUMERIC(4, 2) NOT NULL DEFAULT 0,
        low_quantity NUMERIC(4, 2),
        category_id INT REFERENCES categories(id) ON DELETE SET NULL,
        store_id INT REFERENCES stores(id) ON DELETE SET NULL
    );

    -- Insert seed data

    INSERT INTO categories (name) VALUES ('dairy');

    INSERT INTO stores (store) VALUES ('Wegman''s');


INSERT INTO
    items (
        name,
        quantity,
        low_quantity,
        category_id,
        store_id
    )
VALUES (
        'Milk',
        1.5,
        .75,
        1,
        1
    );
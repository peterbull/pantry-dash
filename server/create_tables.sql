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
        name VARCHAR(40) NOT NULL,
        quantity NUMERIC(4, 2) NOT NULL DEFAULT 0,
        low_quantity NUMERIC(4, 2),
        category_id INT REFERENCES categories(id) ON DELETE SET NULL,
        store_id INT REFERENCES stores(id) ON DELETE SET NULL,
        increase_count INT DEFAULT 0
    );

-- Create a trigger to increment the counter on value increase
CREATE OR REPLACE FUNCTION INCREASE_COUNTER() RETURNS 
TRIGGER AS $$ 
	$$
	BEGIN
	  IF NEW.quantity > OLD.quantity THEN
	    NEW.increase_count := OLD.increase_count + 1;
	ELSE NEW.increase_count := OLD.increase_count;
	END IF;
	RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;



CREATE TRIGGER INCREASE_COUNTER_TRIGGER 
	increase_counter_trigger BEFORE
	UPDATE ON items FOR EACH ROW
	EXECUTE
	    FUNCTION increase_counter();




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


    -- Commands run to alter dev DB
    ALTER TABLE items ADD COLUMN increase_count INTEGER DEFAULT 0;
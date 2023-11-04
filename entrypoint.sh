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
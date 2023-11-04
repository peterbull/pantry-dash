-- Active: 1697879903440@@localhost@5432@pantry_dash@public
CREATE TABLE
    items (
        id SERIAL PRIMARY KEY,
        create_time DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(40) NOT NULL,
        quantity NUMERIC(4, 2) NOT NULL DEFAULT 0,
        low_quantity NUMERIC(4, 2),
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


INSERT INTO
    items (
        name,
        quantity,
        low_quantity
    )
VALUES (
        'Milk',
        1.5,
        .75
    );

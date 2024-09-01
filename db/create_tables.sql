CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(40) NOT NULL,
    quantity NUMERIC(4, 2) NOT NULL DEFAULT 0,
    low_quantity NUMERIC(4, 2),
    increase_count INT DEFAULT 0
);

-- Create or replace the trigger function if it does not exist
CREATE OR REPLACE FUNCTION increase_counter_trigger_function() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.quantity > OLD.quantity THEN
    NEW.increase_count := OLD.increase_count + 1;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'increase_counter_trigger') THEN
        CREATE TRIGGER increase_counter_trigger BEFORE
        UPDATE ON items FOR EACH ROW
        EXECUTE FUNCTION increase_counter_trigger_function ();
    END IF;
END $$;

-- example
-- INSERT INTO
--     items (name, quantity, low_quantity)
-- VALUES ('Milk', 1.5, 0.75);
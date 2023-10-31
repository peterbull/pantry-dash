const request = require("supertest");
const pool = require("../db");
jest.mock('../db');

const app = require("../server");

// Get all Items
describe("GET /items", () => {
  it("should fetch all items", async () => {
    pool.query.mockResolvedValue({
      rows: [{
        id: 1,
        create_time: "2023-10-30T04:00:00.000Z",
        name: "Item_1",
        quantity: 1.00,
        low_quantity: 0.50,
        category_id: 1,
        store_id: 1
      }]
    });

    const res = await request(app).get("/items");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([{
      id: 1,
      create_time: "2023-10-30T04:00:00.000Z",
      name: "Item_1",
      quantity: 1.00,
      low_quantity: 0.50,
      category_id: 1,
      store_id: 1
    }]);
  });
});

// Get single item
describe("GET /items/:id", () => {
  it("should fetch a single item", async () => {
    pool.query.mockResolvedValue({
      rows: [{
        id: 1,
        create_time: "2023-10-30T04:00:00.000Z",
        name: "Item_1",
        quantity: 1.00,
        low_quantity: 0.50,
        category_id: 1,
        store_id: 1
      }]
    });

    const res = await request(app).get("/items/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      id: 1,
      create_time: "2023-10-30T04:00:00.000Z",
      name: "Item_1",
      quantity: 1.00,
      low_quantity: 0.50,
      category_id: 1,
      store_id: 1
    });
  });
});

// Create a single item
describe("POST /items", () => {
  it("should create a new item", async () => {
    const newItem = {
      name: "Item_2",
      quantity: 2.00,
      low_quantity: 1.00,
      category_id: 2,
      store_id: 1
    };
    pool.query.mockResolvedValue({
      rows: [newItem]
    });

    const res = await request(app).post("/items").send(newItem);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(newItem);
  });
});

// Update a single item
describe("PUT /items/:id", () => {
  it("should update an item", async () => {
    const updatedItem = {
      name: "Updated_Item",
      quantity: 3.00
    };
    pool.query.mockResolvedValue({
      rows: [updatedItem]
    });

    const res = await request(app).put("/items/1").send(updatedItem);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(updatedItem);
  });
});

// Delete a single item
describe("DELETE /items/:id", () => {
  it("should delete an item", async () => {
    const deletedItem = {
      name: "Deleted_Item"
    };
    pool.query.mockResolvedValue({
      rows: [deletedItem]
    });

    const res = await request(app).delete("/items/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(`DELETED -- ${deletedItem.name}`);
  });
});

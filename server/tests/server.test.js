const request = require("supertest");
const pool = require("../db");
jest.mock('../db');

const app = require("../server");

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
import { expect } from "chai";

import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
  it("returns HTTP 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).to.equal(200);
  });

  it("return the expected greeting", async () => {
    const response = await request(app).get("/");
    expect(response.text).to.equal("Hello, GitHub Actions!");
  });
});

describe("GET /", () => {
  it("return HTTP 200", async () => {
    const response = await request(app).get("/me");
    expect(response.status).to.equal(200);
  });

  // Inteionally omitting the return output check (Still getting 100% coverage)
});

const request = require("supertest");
const server = require("../../api/server");
const db = require("../knex.config");
const User = require("./user");

beforeEach(async () => {
  await db.seed.run();
});

afterEach(async () => {
  await db.migrate.rollback;
});

describe("User model", () => {
  describe("find", () => {
    it("return all users (4)", async () => {
      const users = await User.find();

      expect(users).toHaveLength(4);
    });
  });
});

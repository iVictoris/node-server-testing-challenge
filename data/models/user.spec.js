const db = require("../knex.config");
const User = require("./user");

beforeEach(async () => {
  await db.seed.run();
});

afterEach(async () => {
  await db.migrate.rollback;
});

describe("User model methods", () => {
  describe("find", () => {
    test("should return all users (4)", async () => {
      const users = await User.find();

      expect(users).toHaveLength(4);
    });
  });
  describe("findById", () => {
    test("should return correct user given an id", async () => {
      const id = 1,
        expectedUsername = "iblahis",
        expectedFirst = "blah",
        expectedLast = "bloh",
        expectedEmail = "blah@outlook.com";

      const user = await User.findById(id);
      expect(user.first).toBe(expectedFirst);
      expect(user.last).toBe(expectedLast);
      expect(user.email).toBe(expectedEmail);
      expect(user.username).toBe(expectedUsername);
    });
  });

  describe("add", () => {
    test("should add a user to the database and return that user", async () => {
      const user = {
        first: "blah1",
        last: "bloh1",
        username: "blahblah",
        email: "blah@blah.com",
        password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
      };

      const result = await User.add(user);

      expect(result.first).toBe(user.first);
      expect(result.last).toBe(user.last);
      expect(result.email).toBe(user.email);
      expect(result.username).toBe(user.username);
      expect(result.id).toBe(5);
      expect(await User.find()).toHaveLength(5);
    });
  });

  describe("update", () => {
    test("should update the corresponding user with given id", async () => {
      const changes = {
        first: "something new",
        last: "what what",
        email: "whatisthat@whaaat.com"
      };

      const id = 1;

      await User.update(id, changes);
      const user = await User.findById(id);

      expect(user.first).toBe(changes.first);
      expect(user.last).toBe(changes.last);
      expect(user.email).toBe(changes.email);
      expect(user.username).toBe("iblahis");
    });
  });

  describe("remove", () => {
    test("should remove the corresponding user (this case should be actual removal from db)", async () => {
      // db length => 4
      await User.remove(1);

      // check for length to be 3
      const users = await User.find();
      expect(users).toHaveLength(3);
    });
  });
});

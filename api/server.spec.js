const request = require("supertest");
const server = require("./server");
const db = require("../data/knex.config");

const fetchData = (url, method) => {
  return req()[method](url);
};

const req = () => {
  return request(server);
};

beforeEach(async () => {
  await db.seed.run();
});

afterEach(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

describe("/ GET response", () => {
  describe("should have a", () => {
    it("status of ok", async () => {
      const response = await fetchData("/", "get");
      expect(response.status).toBe(200);
    });

    it("body with api='running'", async () => {
      const response = await fetchData("/", "get");
      expect(response.body).toEqual({ api: "running" });
    });

    it("type of application/json", async () => {
      const response = await fetchData("/", "get");
      expect(response.type).toBe("application/json");
    });
  });
});

// test endpoints in users
describe("Users route", () => {
  // create
  describe("/api/users POST", () => {
    // user dummy data to use
    const user = {
      username: "blahblohblah",
      password: "password123",
      email: "blah@blehbloh.com",
      first: "blue",
      last: "blan"
    };

    it("should give back status code of 201", async () => {
      const response = await req()
        .post("/api/users")
        .send(user);

      expect(response.status).toBe(201);
    });

    it("should have content set to application/json", async () => {
      const response = await req()
        .post("/api/users")
        .send(user);

      expect(response.type).toBe("application/json");
    });

    it("should give back a user with an id", async () => {
      const response = await req()
        .post("/api/users")
        .send(user);

      expect(response.body.id).toBeTruthy();
    });
    it("should give back a user with the same data as the one passed in, with exception of password", async () => {
      const response = await req()
        .post("/api/users")
        .send(user);

      expect(response.body.username).toBe(user.username);
      expect(response.body.first).toBe(user.first);
      expect(response.body.last).toBe(user.last);
      expect(response.body.email).toBe(user.email);
    });
  });

  // read

  describe("/api/users get", () => {
    it("should give back status code of 200", async () => {
      const response = await req().get("/api/users");

      expect(response.status).toBe(200);
    });

    it("should have content set to application/json", async () => {
      const response = await req().get("/api/users");

      expect(response.type).toBe("application/json");
    });

    it("should provide the current number of users (4)", async () => {
      const response = await req().get("/api/users");
      const user = await db("users");

      expect(response.body).toHaveLength(4);
      expect(response.body.length).toBe(user.length);
    });
  });
  // update

  describe("/api/users/1 put", () => {
    const payload = {
      first: "alsdkas",
      last: "akdasl"
    };
    it("should give back status code of 200", async () => {
      const response = await request(server)
        .put("/api/users/1")
        .send(payload);

      expect(response.status).toBe(200);
    });

    it("should have content set to application/json", async () => {
      const response = await request(server)
        .put("/api/users/1")
        .send(payload);

      expect(response.type).toBe("application/json");
    });
    it("should change the values of that user by the given payload", async () => {
      const response = await request(server)
        .put("/api/users/1")
        .send(payload);

      expect(response.body.first).toBe(payload.first);
      expect(response.body.last).toBe(payload.last);
    });
  });

  // delete

  describe("/api/users/1 delete", () => {
    it("should give back status code of 200", async () => {
      const response = await request(server).delete("/api/users/1");

      expect(response.status).toBe(200);
    });

    it("should have content set to application/json", async () => {
      const response = await request(server).delete("/api/users/1");

      expect(response.type).toBe("application/json");
    });

    it("should remove user from db", async () => {
      await request(server).delete("/api/users/1");

      const users = await db("users");
      const user = await db("users")
        .where({ id: 1 })
        .first();

      expect(users).toHaveLength(3);
      expect(user).toBeUndefined();
    });
  });
});

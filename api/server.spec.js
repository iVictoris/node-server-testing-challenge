const request = require("supertest");
const server = require("./server");

const fetchData = (url, method) => {
  return request(server)[method](url);
};

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
      expect(response.type).toBe('application/json');
    });
  });
});



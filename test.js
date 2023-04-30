const http = require("http");

describe("Server", () => {
  it("should return 200 OK", (done) => {
    http.get("http://localhost:3000", (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});

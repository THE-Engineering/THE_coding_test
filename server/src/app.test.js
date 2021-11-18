import supertest from 'supertest';
import createApp from './app';

const app = createApp();

describe("app", () => {
  it("responds to GET /", async () => {
    await supertest(app).get("/").expect(200);
  });
});

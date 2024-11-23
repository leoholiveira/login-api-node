const request = require('supertest');
const app = require('../server');

beforeAll(async () => {
  await db.authenticate();
});

afterAll(async () => {
  await db.close();
});

describe('Autenticação', () => {
  it('Deve realizar login e retornar token', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            login(email: "email@teste.com", password: "123456") {
              token
            }
          }
        `,
      });

    expect(res.body.data.login.token).toBeTruthy();
    done();
  });
});


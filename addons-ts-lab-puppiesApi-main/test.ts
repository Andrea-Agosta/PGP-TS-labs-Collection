import request from 'supertest';
import app from './app';

describe('Testing api endpoint', () => {
  test('sanity check for /test', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      test: 'is working as it should',
    });
  });

  test('GET request to api/puppies', async () => {
    const res = await request(app).get('api/puppies');
    expect(res.statusCode).toEqual(200);
  });

  test('GET puppy with id 1', async () => {
    const res = await request(app).get('api/puppies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      "id": 1,
      "breed": "American Bully",
      "name": "cfetherstone0",
      "birth": "11/12/2022"
    });
  });
});

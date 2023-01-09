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
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
  });

  test('GET puppy with id 1', async () => {
    const res = await request(app).get('/api/puppies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      "id": 1,
      "breed": "American Bully",
      "name": "cfetherstone0",
      "birth": "11/6/2022"
    });
  });

  test('Error GET puppy with id 9999', async () => {
    const res = await request(app).get('/api/puppies/9999');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'Bad Request' });
  });

  test('Add new puppy', async () => {
    const puppy = {
      "breed": "TEST",
      "name": "TEST",
      "birth": "TEST"
    };
    const res = await request(app).post('/api/puppies').send(puppy);
    expect(res.statusCode).toEqual(200);
    expect(res.body.breed).toEqual('TEST');
    expect(res.body.name).toEqual('TEST');
    expect(res.body.birth).toEqual('TEST');
  });

  test('Bad request Add new puppy', async () => {
    const puppy = {
      "breed": "TEST",
      "name": "TEST",
    };
    const res = await request(app).post('/api/puppies').send(puppy);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'Bad request.' });
  });

  test('PUT puppy with id 1', async () => {
    const puppy = {
      "breed": "Breed Updated",
      "name": "Name Updated",
      "birth": "New Birth",
    };
    const res = await request(app).put('/api/puppies/1').send(puppy);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      "id": 1,
      "breed": "Breed Updated",
      "name": "Name Updated",
      "birth": "New Birth",
    });
  });

  test('Error PUT puppy with id 999', async () => {
    const puppy = {
      "breed": "Breed Updated",
      "name": "Name Updated",
      "birth": "New Birth",
    };
    const res = await request(app).put('/api/puppies/999').send(puppy);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'Bad Request' });
  });

  test('Error PUT puppy with id 1 and less information', async () => {
    const puppy = {
      "breed": "Breed Updated",
      "name": "Name Updated",
    };
    const res = await request(app).put('/api/puppies/1').send(puppy);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'Bad Request' });
  });

  test('Delete Puppy with id 1', async () => {
    const res = await request(app).delete('/api/puppies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Puppy deleted successfully' });
  });

  test('Delete Error Puppy with id 999', async () => {
    const res = await request(app).delete('/api/puppies/999');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'Bad request' });
  });
});

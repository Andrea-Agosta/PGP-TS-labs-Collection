import express from 'express';
import { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import { db } from './db';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
interface PuppiesData {
  id: number,
  breed: string,
  name: string,
  birth: string
}

let count: number = 100;

const getAllPuppies = (_req: Request, res: Response) => {
  res.status(200).json(db);
};

const getPuppiesfromId = (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const findPuppy = db.find(puppy => puppy.id === id);
  (id && findPuppy) ? res.status(200).json(findPuppy) : res.status(400).json({ error: 'Bad Request' });
};

const addPuppies = (_req: Request, res: Response) => {
  const { breed, name, birth } = _req.body;

  if (breed && name && birth) {
    const newPuppy: PuppiesData = { id: count + 1, breed, name, birth };
    count++;
    db.push(newPuppy);
    res.status(200).json(newPuppy);
  } else {
    res.status(400).json({ error: 'Bad request.' });
  }
};

const updatePuppyFromId = (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const { breed, name, birth } = _req.body;
  const findPuppy = db.find(puppy => puppy.id === id);
  if (findPuppy && breed && name && birth) {
    const index = db.findIndex(puppy => puppy.id === id);
    db.splice(index, 1, { id, breed, name, birth });
    res.status(200).json(db.find(puppy => puppy.id === id))
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
};

const deletePuppy = (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const findPuppy = db.find(puppy => puppy.id === id);
  if (findPuppy) {
    const index = db.findIndex(puppy => puppy.id === id);
    db.splice(index, 1);
    res.status(200).json({ message: 'Puppy deleted successfully' });
  } else {
    res.status(400).json({ error: 'Bad request' });
  }
};

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.get('/api/puppies', getAllPuppies);
app.get('/api/puppies/:id', getPuppiesfromId);
app.post('/api/puppies', addPuppies);
app.put('/api/puppies/:id', updatePuppyFromId);
app.delete('/api/puppies/:id', deletePuppy);

export default app;

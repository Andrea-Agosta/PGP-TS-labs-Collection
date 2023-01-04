import express from 'express';
import { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
interface PuppiesData {
  id: number,
  breed: string,
  name: string,
  birth: string
}

let count: number = 5;

const db: PuppiesData[] = [
  {
    "id": 1,
    "breed": "American Bully",
    "name": "cfetherstone0",
    "birth": "11/12/2022"
  },
  {
    "id": 2,
    "breed": "Australian Bulldog",
    "name": "fbeaston1",
    "birth": "3/12/2022"
  },
  {
    "id": 3,
    "breed": "Biewer Terrier",
    "name": "mfutcher2",
    "birth": "8/12/2022"
  },
  {
    "id": 4,
    "breed": "Beagle",
    "name": "noram3",
    "birth": "22/12/2022"
  },
];

const getAllPuppies = (_req: Request, res: Response) => {
  res.status(200).json(db);
};

const getPuppiesfromId = (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const findPuppy = db.find(puppy => puppy.id === id);
  (id && findPuppy) ? res.status(200).json(db.find(puppy => puppy.id === id)) : res.status(400).json({ error: 'Bad Request' });
};

const addPuppies = (_req: Request, res: Response) => {
  const { breed, name, birth } = _req.body;
  if (breed && name && birth) {
    const newId: number = count + 1;
    count++;
    const newPuppy: PuppiesData = { id: newId, breed, name, birth };
    db.push(newPuppy);
    res.status(200).location(`/api/puppies/${newId}`).json(newPuppy);
  } else {
    res.status(400).json({ error: 'Bad request.' });
  }
};

const updatePuppyFromId = (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const { breed, name, birth } = _req.body;
  const findPuppy = db.find(puppy => puppy.id === id);
  if (id && findPuppy && breed && name && birth) {
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
  if (id && findPuppy) {
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

import express from 'express';
import { Request, Response, Application } from 'express';

const app: Application = express();
app.use(express.json());
interface PuppiesData {
  id: number,
  breed: string,
  name: string,
  birth: string
}

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
  (id && id <= db.length) ? res.status(200).json(db[id - 1]) : res.status(400).json({ error: 'Bad Request' });
};

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.get('/api/puppies', getAllPuppies);
app.get('/api/puppies/:id', getPuppiesfromId);

export default app;

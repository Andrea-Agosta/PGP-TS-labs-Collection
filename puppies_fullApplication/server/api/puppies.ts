import { db } from '../db';
import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

interface PuppiesData {
  id: number,
  breed: string,
  name: string,
  birth: string
}

let count: number = 100;

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json(db);
});

router.get('/:id', (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const findPuppy = db.find(puppy => puppy.id === id);
  (id && findPuppy) ? res.status(200).json(findPuppy) : res.status(400).json({ error: 'Bad Request' });
});

router.post('/', (_req: Request, res: Response) => {
  const { breed, name, birth } = _req.body;
  if (breed && name && birth) {
    const newPuppy: PuppiesData = { id: count + 1, breed, name, birth };
    count++;
    db.push(newPuppy);
    res.status(200).json(newPuppy);
  } else {
    res.status(400).json({ error: 'Bad request.' });
  }
});

router.put('/:id', (_req: Request, res: Response) => {
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
});

router.delete('/:id', (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const findPuppy = db.find(puppy => puppy.id === id);
  if (findPuppy) {
    const index = db.findIndex(puppy => puppy.id === id);
    db.splice(index, 1);
    res.status(200).json({ message: 'Puppy deleted successfully' });
  } else {
    res.status(400).json({ error: 'Bad request' });
  }
});


export default router;
// import { db } from 'db';
import express from 'express';
import { Request, Response, Application } from 'express';

const app: Application = express();

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.get('api/puppies', (_req: Request, res: Response) => {
  return res.status(200).json();
});

export default app;

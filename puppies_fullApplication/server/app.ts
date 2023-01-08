import express from 'express';
import { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import puppies from './api/puppies';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.use('/api/puppies', puppies);

export default app;

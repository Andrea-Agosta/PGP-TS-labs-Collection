import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import puppies from './api/puppies';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/puppies', puppies);

export default app;
import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import puppies from './api/product';


const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/product', puppies);

export default app;
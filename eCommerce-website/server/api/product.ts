import express from 'express';
import { Request, Response } from 'express';
import { getProductById } from '../db/db';
const router = express.Router();


router.get('/', (_req: Request, res: Response) => {
  res.status(200).send('hey');
});

router.get('/', (_req: Request, res: Response) => {
  const data = getProductById(_req.body.productId);
  res.status(200).json(data);
});



export default router;

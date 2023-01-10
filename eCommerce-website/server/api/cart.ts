import express from 'express';
import { Request, Response } from 'express';
import { getCartData, addItemToCart } from '../db';
const router = express.Router();


router.get('/', (_req: Request, res: Response) => {
  const data = getCartData();
  res.status(200).json(data);
});

router.post('/', (_req: Request, res: Response) => {
  const data = addItemToCart(_req.body);
  res.status(200).json(data);
});



export default router;
import express from 'express';
import { Request, Response } from 'express';
import { getCartData, addItemToCart, deleteCart } from '../db';
const router = express.Router();


router.get('/', (_req: Request, res: Response) => {
  const data = getCartData();
  res.status(200).json(data);
});

router.post('/:id/products', (_req: Request, res: Response) => {
  const data = addItemToCart(_req.body);
  res.status(200).json(data);
});

router.delete('/:id', (_req: Request, res: Response) => {
  const data = deleteCart(_req.params.cartId);
  res.status(200).json(data);
});

export default router;
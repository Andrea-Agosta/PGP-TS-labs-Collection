import express from 'express';
import { Request, Response } from 'express';
import { getProduct, getProductbyId } from '../db';
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const data = getProduct();
  res.status(200).json(data);
});
router.get('/:id', (_req: Request, res: Response) => {
  const data = getProductbyId(_req.body.productId);
  res.status(200).json(data);
});

export default router;
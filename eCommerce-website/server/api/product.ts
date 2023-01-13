import express from 'express';
import { Request, Response } from 'express';
import { getProduct, getProductbyId } from '../db';
const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const data = await getProduct();
  res.status(200).json(data);
});
router.get('/:id', (_req: Request, res: Response) => {
  const data = getProductbyId(_req.params.productId);
  res.status(200).json(data);
});

export default router;
import { Pool } from 'pg';
import { config } from 'dotenv';
import { Product } from '../types';

config({ path: '../containerConfig/psql.env' });

const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 3000,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const connectionDB = async (query: string) => {
  const client = await pool.connect();
  try {
    const result = await client.query(query);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
};

const getProductById = async (productId: Product) => {
  const query = `SELECT * FROM salt_products WHERE product_id = '${productId}'`;
  const data = await connectionDB(query);

  return {
    productId: data.product_id,
    name: data.product_name,
    price: data.product_price,
  };
};

export { getProductById };
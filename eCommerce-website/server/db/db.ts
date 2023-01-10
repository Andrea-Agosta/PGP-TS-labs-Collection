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

const getAllProduct = async (): Promise<Product[]> => {
  const query: string = `SELECT * FROM products`;
  const data = await connectionDB(query);
  return data;
};

const getProductById = async (productId: string): Promise<Product> => {
  const query: string = `SELECT * FROM products WHERE product_id = '${productId}'`;
  const data = await connectionDB(query);
  return {
    id: data.product_id,
    name: data.product_name,
    description: data.product_description,
    price: data.product_price,
  };
};

const getCart = async (): Promise<Product[]> => {
  const query: string = `SELECT * FROM cart`;
  const data = await connectionDB(query);
  return data;
};

const addNewItemToCart = async (productId: string): Promise<Product[]> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new Error('Product not found');
  }
  const query: string = `
    INSERT INTO cart (name, description, price, category, image_url, manufacturer, stock)
    VALUES ('${product.name}', '${product.description}', ${product.price});
  `;
  const data = await connectionDB(query);
  return data;
};

const deleteCartById = async (cartId: string): Promise<void> => {
  const query: string = `DELETE FROM products WHERE id = ${cartId};`;
  const data = await connectionDB(query);
  return data;
};

export { getAllProduct, getProductById, getCart, addNewItemToCart, deleteCartById };
import { getAllProduct, getProductById, getCart, addNewItemToCart } from "./db";

const getProduct = async () => await getAllProduct();
const getProductbyId = async (productId: string) => await getProductById(productId);
const getCartData = async () => await getCart();
const addItemToCart = async (productId: string) => await addNewItemToCart(productId);

export { getProduct, getProductbyId, getCartData, addItemToCart };

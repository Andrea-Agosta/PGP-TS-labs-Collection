import { getAllProduct, getProductById, getCart, addNewItemToCart, deleteCartById } from "./db";

const getProduct = async () => await getAllProduct();
const getProductbyId = async (productId: string) => await getProductById(productId);
const getCartData = async () => await getCart();
const addItemToCart = async (productId: string) => await addNewItemToCart(productId);
const deleteCart = async (cartId: string) => await deleteCartById(cartId);

export { getProduct, getProductbyId, getCartData, addItemToCart, deleteCart };

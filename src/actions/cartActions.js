export const addToCart = (cartItem) => ({
  type: 'ADD_TO_CART',
  payload: cartItem,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeFromCart = (product_id) => ({
  type: 'REMOVE_FROM_CART',
  payload: product_id,
});
export const ADD_CART = "ADD_CART";

export function addCart(order, prototype) {
  return {
    type: ADD_CART,
    order,
    prototype,
  };
}

import { ADD_CART } from "./actions";

const initialState = [];

export function cartApp(previousState = initialState, action) {
  //   if (previousState === undefined) {
  //     return [];
  //   }
  if (action.type === ADD_CART) {
    return [...previousState, action.order, action.prototype];
  }

  return previousState;
}

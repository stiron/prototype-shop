import { legacy_createStore as createStore } from "redux";
import { cartApp } from "./reducers";

const store = createStore(cartApp);

export default store;

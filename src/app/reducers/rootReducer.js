import { combineReducers } from "redux";

import orderReducer from "../../features/order/orderReducer";

const rootReducer = combineReducers({
  orders: orderReducer
});

export default rootReducer;

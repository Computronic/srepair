import * as actions from "./orderConstants";

export const createOrder = order => {
  return {
    type: actions.CREATE_ORDER,
    payload: {
      order
    }
  };
};

export const updateOrder = order => {
  return {
    type: actions.UPDATE_ORDER,
    payload: {
      order
    }
  };
};

export const deleteOrder = orderId => {
  return {
    type: actions.DELETE_ORDER,
    payload: {
      orderId
    }
  };
};

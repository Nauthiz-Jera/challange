import { ADD_TO_ORDER, DELETE_FROM_ORDER, DELETE_ORDER } from '../actions/action-types';

const INITIAL_STATE = {
  order: {},
};

export default (state = INITIAL_STATE, action) => {
  let updatedOrder = { ...state.order };
  switch (action.type) {
    case ADD_TO_ORDER:
      updatedOrder[action.payload._id] = action.payload;
      return {
        ...state,
        order: updatedOrder,
      };
    case DELETE_FROM_ORDER:
      delete updatedOrder[action.payload];
      return {
        ...state,
        order: updatedOrder,
      };
    case DELETE_ORDER:
      return {
        state,
        order: {},
      };
    default:
      return state;
  }
};

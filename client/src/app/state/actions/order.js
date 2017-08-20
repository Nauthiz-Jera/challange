import { ADD_TO_ORDER, DELETE_FROM_ORDER, DELETE_ORDER } from './action-types';
export const addToOrder = widgetToAdd => ({
  type: ADD_TO_ORDER,
  payload: widgetToAdd,
});

export const deleteFromOrder = widgetToDelete => ({
  type: DELETE_FROM_ORDER,
  payload: widgetToDelete,
});

export const deleteOrder = () => ({
  type: DELETE_ORDER,
});

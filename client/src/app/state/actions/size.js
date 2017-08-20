import { SELECT_SIZE } from './action-types';
export const selectSize = selectedSize => ({
  type: SELECT_SIZE,
  payload: selectedSize,
});

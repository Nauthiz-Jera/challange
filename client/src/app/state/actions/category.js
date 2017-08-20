import { SELECT_CATEGORY } from './action-types';
export const selectCategory = selectedCategory => ({
  type: SELECT_CATEGORY,
  payload: selectedCategory,
});

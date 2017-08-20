const createAsyncActionType = action => ({
  SUCCESS: `${action}-success`,
  ERROR: `${action}-error`,
  REQUESTED: `${action}-requested`,
});
export const SELECT_CATEGORY = 'select_category';
export const SELECT_SIZE = 'select_size';
export const SELECT_FINISH = 'select_finish';
export const FETCH_ALL_WIDGETS = createAsyncActionType('fetch-all-widgets');
export const INCREMENT_WIDGET_QUANTITY = 'increment-widget-quantity';
export const DECREMENT_WIDGET_QUANTITY = 'decrement-widget-quantity';
export const ADD_TO_ORDER = 'add_to_order';
export const DELETE_FROM_ORDER = 'delete_from_order';
export const DELETE_ORDER = 'delete_order';
export const TOGGLE_MENU = 'toggle_menu';

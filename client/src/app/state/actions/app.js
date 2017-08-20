import {
  FETCH_ALL_WIDGETS,
  INCREMENT_WIDGET_QUANTITY,
  DECREMENT_WIDGET_QUANTITY,
} from './action-types';

export const fetchAllWidgetsSuccess = payload => ({
  type: FETCH_ALL_WIDGETS.SUCCESS,
  payload,
});

export const fetchAllWidgetsFail = error => ({
  type: FETCH_ALL_WIDGETS.ERROR,
  error,
});

export const fetchAllWidgets = () => ({
  type: FETCH_ALL_WIDGETS.REQUESTED,
});

export const incrementWidgetQuantity = id => ({
  type: INCREMENT_WIDGET_QUANTITY,
  payload: id,
});
export const decrementWidgetQuantity = id => ({
  type: DECREMENT_WIDGET_QUANTITY,
  payload: id,
});

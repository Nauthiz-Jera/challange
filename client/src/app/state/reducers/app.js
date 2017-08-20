import {
  FETCH_ALL_WIDGETS,
  INCREMENT_WIDGET_QUANTITY,
  DECREMENT_WIDGET_QUANTITY,
} from '../actions/action-types';

const INITIAL_STATE = {
  widgets: [],
};

export default (state = INITIAL_STATE, action) => {
  let widgets;
  let currentWidget;
  switch (action.type) {
    case FETCH_ALL_WIDGETS.SUCCESS:
      return {
        ...state,
        widgets: action.payload,
      };
    case INCREMENT_WIDGET_QUANTITY:
      widgets = [...state.widgets];
      widgets.forEach(widget => {
        if (widget._id === action.payload) {
          widget.quantity++;
        }
      });
      return {
        ...state,
        widgets,
      };
    case DECREMENT_WIDGET_QUANTITY:
      widgets = [...state.widgets];
      widgets.forEach(widget => {
        if (widget._id === action.payload && widget.quantity > 0) {
          widget.quantity--;
        }
      });
      return {
        ...state,
        widgets,
      };
    default:
      return state;
  }
};

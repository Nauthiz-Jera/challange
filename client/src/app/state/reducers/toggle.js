import { TOGGLE_MENU } from '../actions/action-types';

const INITIAL_STATE = {
  toggle: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        toggle: action.payload,
      };
    default:
      return state;
  }
};

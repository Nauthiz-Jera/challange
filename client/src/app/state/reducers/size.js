import { SELECT_SIZE } from '../actions/action-types';
import { ALL } from '../../constants/widgets';

const INITIAL_STATE = {
  selectedSize: ALL.value,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    default:
      return state;
  }
};

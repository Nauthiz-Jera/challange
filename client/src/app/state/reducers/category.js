import { SELECT_CATEGORY } from '../actions/action-types';
import { ALL } from '../../constants/widgets';

const INITIAL_STATE = {
  selectedCategory: ALL.value,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

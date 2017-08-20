import { SELECT_FINISH } from '../actions/action-types';
import { ALL } from '../../constants/widgets';

const INITIAL_STATE = {
  selectedFinish: ALL.value,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_FINISH:
      return {
        ...state,
        selectedFinish: action.payload,
      };
    default:
      return state;
  }
};

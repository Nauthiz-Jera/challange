import { SELECT_FINISH } from './action-types';
export const selectFinish = selectedFinish => ({
  type: SELECT_FINISH,
  payload: selectedFinish,
});

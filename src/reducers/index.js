import {TOGGLE_FRAME_RUNNING} from '../actions';

export const initialState = Object.assign({}, {
  titleGame: 'Auto Fighters',
  frameRunning: false
});

export const appReducer = (state=initialState, action) => {

  if (action.type === TOGGLE_FRAME_RUNNING) {
    return Object.assign({}, state, {frameRunning: !state.frameRunning});
  }

  return state;
}

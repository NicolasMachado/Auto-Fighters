import {TOGGLE_FRAME_RUNNING, SAVE_CURRENT_FRAME} from '../actions';

export const initialState = Object.assign({}, {
  titleGame: 'Auto Fighters',
  currentFrame: 0,
  frameRunning: false,
  fighters: {
    allies: [
      {
        name: 'Ally number 1',
        hp: 54,
        mp: 32,
        ap: 74,
        stats: {
          maxHp: 123,
          maxMp: 73
        }
      },
      {
        name: 'Ally number 2',
        hp: 32,
        rp: 27,
        ap: 84,
        stats: {
          maxHp: 97
        }
      }
    ],
    ennemies: []
  }
});

export const appReducer = (state=initialState, action) => {

  if (action.type === TOGGLE_FRAME_RUNNING) {
    return Object.assign({}, state, {frameRunning: !state.frameRunning});
  }

  if (action.type === SAVE_CURRENT_FRAME) {
    return Object.assign({}, state, {currentFrame: action.currentFrame});
  }

  return state;
}

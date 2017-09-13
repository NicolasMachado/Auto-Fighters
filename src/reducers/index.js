import {TOGGLE_FRAME_RUNNING, ADD_FRAME} from '../actions';

export const initialState = Object.assign({}, {
  titleGame: 'Auto Fighters',
  currentFrame: 0,
  frameRate: 100,
  frameRunning: false,
  nextActions: [],
  fighters: {
    allies: [
      {
        name: 'Ally number 1',
        hp: 54,
        mp: 32,
        ap: 24,
        stats: {
          speed: 1.2,
          maxHp: 123,
          maxMp: 73
        }
      },
      {
        name: 'Ally number 2',
        hp: 32,
        rp: 27,
        ap: 42,
        stats: {
          speed: .5,
          maxHp: 97
        }
      }
    ],
    ennemies: []
  }
});

export const appReducer = (state=initialState, action) => {

  if (action.type === TOGGLE_FRAME_RUNNING) {
    return Object.assign({}, state, {frameRunning: action.bool || !state.frameRunning});
  }

  if (action.type === ADD_FRAME) {
    // Add action points
    const allies = state.fighters.allies.map((ally) => {
      let ap = ally.ap + ally.stats.speed > 100 ? 100 : ally.ap + ally.stats.speed;
      ap = ap < 0 ? 0 : ap;
      return Object.assign({}, ally, { ap });
    });

    return Object.assign({}, state, {
      currentFrame: state.currentFrame + 1,
      fighters: {
        allies
      }
    });
  }

  return state;
}

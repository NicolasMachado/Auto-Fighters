import {TOGGLE_FRAME_RUNNING, ADD_FRAME, ADD_LOG_ENTRY} from '../actions';

export const initialState = Object.assign({}, {
  titleGame: 'Auto Fighters',
  currentFrame: 0,
  frameRate: 100,
  frameRunning: false,
  nextActions: [],
  currentActor: null,
  log: [],
  fighters: {
    allies: [
      {
        id: 1,
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
        id: 2,
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
    enemies: [
      {
        id: 3,
        name: 'Enemy number 1',
        hp: 34,
        mp: 52,
        ap: 13,
        stats: {
          speed: .7,
          maxHp: 241,
          maxMp: 120
        }
      },
      {
        id: 4,
        name: 'Enemy number 2',
        hp: 72,
        rp: 54,
        ap: 63,
        stats: {
          speed: 1.5,
          maxHp: 112
        }
      }

    ]
  }
});

export const appReducer = (state=initialState, action) => {

  if (action.type === TOGGLE_FRAME_RUNNING) {
    const frameRunning = typeof action.bool === 'undefined' ? !(state.frameRunning) : action.bool;
    return Object.assign({}, state, {frameRunning});
  }

  else if (action.type === ADD_FRAME) {
    const allies = addApPoints(state.fighters.allies);
    const enemies = addApPoints(state.fighters.enemies);

    return Object.assign({}, state, {
      currentFrame: state.currentFrame + 1,
      fighters: {
        allies,
        enemies
      }
    });
  }

  else if (action.type === ADD_LOG_ENTRY) {
    const log = [...state.log, action.message];
    return Object.assign({}, state, {log});
  }

  return state;
}

function addApPoints(group) {
  // Add action points
  const groupReturn = group.map((fighter) => {
    let ap = fighter.ap + fighter.stats.speed > 100 ? 100 : fighter.ap + fighter.stats.speed;
    ap = ap < 0 ? 0 : ap;
    return {...fighter, ap};
  });

  return groupReturn
}

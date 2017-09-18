import {TOGGLE_FRAME_RUNNING, ADD_FRAME, ADD_LOG_ENTRY, START_TURN} from '../actions';
import clone from 'clone';

export const initialState = Object.assign({}, {
  titleGame: 'Auto Fighters',
  currentFrame: 0,
  frameRate: 100,
  frameRunning: false,
  nextActions: [],
  currentActor: null,
  log: [],
  fighters: {
    11: {
      side: 'ally',
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
    22: {
      side: 'ally',
      name: 'Ally number 2',
      hp: 32,
      rp: 27,
      ap: 42,
      stats: {
        speed: .5,
        maxHp: 97
      }
    },
    66: {
      side: 'enemy',
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
    77: {
      side: 'enemy',
      name: 'Enemy number 2',
      hp: 72,
      rp: 54,
      ap: 63,
      stats: {
        speed: 1.5,
        maxHp: 112
      }
    }
  },
  alliesList: [11, 22],
  enemiesList: [66, 77]
});

export const appReducer = (state=initialState, action) => {

  if (action.type === TOGGLE_FRAME_RUNNING) {
    const frameRunning = typeof action.bool === 'undefined' ? !(state.frameRunning) : action.bool;
    return Object.assign({}, state, {frameRunning});
  }

  else if (action.type === START_TURN) {
    const fighters = modifyFighterAttribute(state, action.fighterId, 'ap', 0);
    return Object.assign({}, state, {fighters});
  }

  else if (action.type === ADD_FRAME) {
    const fighters = addApPoints(state);

    return Object.assign({}, state, {
      currentFrame: state.currentFrame + 1,
      fighters
    });
  }

  else if (action.type === ADD_LOG_ENTRY) {
    const log = [...state.log, action.message];
    return Object.assign({}, state, {log});
  }

  return state;
}

function addApPoints(state) {
  // Add action points
  let fighters = clone(state.fighters);
  const listAll = [...state.alliesList, ...state.enemiesList];

  listAll.forEach((fighter) => {
    fighters[fighter].ap = fighters[fighter].ap + fighters[fighter].stats.speed;
  })
  return fighters
}

function modifyFighterAttribute(state, id, attr, value) {
  let fighters = clone(state.fighters);
  fighters[id][attr] = value;
  return fighters
}

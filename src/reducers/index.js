import {TOGGLE_FRAME_RUNNING, ADD_FRAME, ADD_LOG_ENTRY, MODIFY_ATTRIBUTE} from '../actions';
import clone from 'clone';
import {mockReducer} from '../mockData';

export const initialState = Object.assign({
  titleGame: 'AF',
  currentFrame: 0,
  frameRate: 100,
  frameRunning: false,
  nextActions: [],
  currentActor: null,
  log: [],
  maxLogEntries: 5,
  fighters: []
}, {...mockReducer});

export const appReducer = (state=initialState, action) => {

  if (action.type === TOGGLE_FRAME_RUNNING) {
    const frameRunning = typeof action.bool === 'undefined' ? !(state.frameRunning) : action.bool;
    return Object.assign({}, state, {frameRunning});
  }

  else if (action.type === MODIFY_ATTRIBUTE) {
    // modify attributes of one fighter
    const allFighters = modifyAttr(state, action)
    return {
      ...state,
      fighters: allFighters
    }
  }

  else if (action.type === ADD_FRAME) {
    let clonedState = clone(state);
    clonedState = addApPoints(clonedState);

    return Object.assign({}, state, {...clonedState});
  }

  else if (action.type === ADD_LOG_ENTRY) {
    const logCopy = clone(state.log);
    // purge log if too long
    if (logCopy.length >= state.maxLogEntries) {
      logCopy.shift();
    }
    const log = [...logCopy, action.message];
    return Object.assign({}, state, {log});
  }

  return state;
}

function addApPoints(clonedState) {
  // Add action points
  clonedState.fighters.forEach((fighter) => {
    fighter.ap += fighter.stats.speed*3;
  })
  clonedState.currentFrame++;
  return clonedState
}

function modifyAttr(state, action) {
  let clonedStateFighters = clone(state.fighters);
  clonedStateFighters.forEach(fighter => {
    if (fighter.id === action.fighter.id) {
      fighter[action.attribute] = action.amount;
    }
  })
  return clonedStateFighters
}

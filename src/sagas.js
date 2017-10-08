import {put, takeLatest} from 'redux-saga/effects';
import { START_TURN, toggleFrameRunning, modifyAttribute } from './actions';

function* startTurn(action) {
  try {
    const state = action.state;
    const fighterId = state.ownerId;
    const fighter = state.fighters[fighterId];
    const fighters = state.fighters;

    // Select targets
    const targets = selectTargets(fighter, fighters);

    // apply modification on each target
    for (let i=0; i < targets.length; i++) {
      yield put(modifyAttribute(targets[i], 'hp', 0))
    }

    yield put(modifyAttribute(fighterId, 'ap', 0))
    yield put(toggleFrameRunning(true))
  } catch(e) {
    console.log("Error at startTurn:", e.message)
  }
}

export default function* mySaga() {
  yield takeLatest(START_TURN, startTurn);
}

function selectTargets(fighter, fighters) {
  let targets = [];

  // select ennemis on other side
  for (const id in fighters) {
    if (fighters[id].side !== fighter.side) {
      targets.push(id);
    }
  }

  // select the one with the most hp
  targets = targets.reduce((a, b) => {
    return fighters[a].hp >= fighters[b].hp ? [a] : [b];
  });

  return targets
}

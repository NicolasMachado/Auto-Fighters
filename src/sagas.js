import {put, takeLatest} from 'redux-saga/effects';
import { START_TURN, addLogEntry, toggleFrameRunning, modifyAttribute } from './actions';
import clone from 'clone';

function* startTurn(action) {
  try {
    const clonedAction = clone(action);
    const fighterId = clonedAction.fighterId;
    const allFighters = clonedAction.allFighters;
    const playingFighter = allFighters.filter(f => f.id === fighterId)[0];

    // Select targets
    const targets = selectTargets(playingFighter, allFighters);

    // apply modification on each target
    for (let i=0; i < targets.length; i++) {
      const rand = Math.round(Math.random()*100);
      yield put(modifyAttribute(targets[i], 'hp', rand))
      yield put(addLogEntry(`${playingFighter.name} dealt ${rand} dmg to ${targets[i].name}`))
    }

    yield put(modifyAttribute(playingFighter, 'ap', 0))
    yield put(toggleFrameRunning(true))
  } catch(e) {
    console.log("Error at startTurn:", e.message)
  }
}

export default function* mySaga() {
  yield takeLatest(START_TURN, startTurn);
}

function selectTargets(playingFighter, allFighters) {
  let targets = [];

  // select ennemis on other side
  targets = allFighters.filter(f => f.side !== playingFighter.side)

  // select the one with the most hp
  targets = targets.reduce((a, b) => {
    return a.hp >= b.hp ? a : b;
  });

  return [targets]
}

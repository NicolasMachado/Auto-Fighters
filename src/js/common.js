import React from 'react';
import Fighter from '../components/Fighter';

// common function displaying fighters frames
export function renderFighterFrame(allFightersList, side) {
  const filteredAllies = allFightersList.filter(fighter => fighter.side === side);
  const classBarSide = side === 'ally' ? 'ally-bar' : 'enemy-bar';
  const fighters = filteredAllies.map((fighter) => {
    return (<Fighter
        key = {fighter.id}
        fighterId={fighter.id}
        fighter = {fighter}
        classBarSide = {classBarSide}
      />)
  })
  return fighters
}

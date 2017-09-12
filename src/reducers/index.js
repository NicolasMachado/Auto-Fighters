import {ADD_TICK_FRAME} from '../actions';

export const initialState = Object.assign({}, {
  titleGame: 'Auto Fighters'
});

export const appReducer = (state=initialState, action) => {

  if (action.type === ADD_TICK_FRAME) {
    console.log('tick')
  }

  return state;
}

export const TOGGLE_FRAME_RUNNING = 'TOGGLE_FRAME_RUNNING';
export const toggleFrameRunning = (bool) => ({
  type: TOGGLE_FRAME_RUNNING,
  bool
});

export const ADD_FRAME = 'ADD_FRAME';
export const addFrame = () => ({
  type: ADD_FRAME
});

export const ADD_LOG_ENTRY = 'ADD_LOG_ENTRY';
export const addLogEntry = (message) => ({
  type: ADD_LOG_ENTRY,
  message
});

export const START_TURN = 'START_TURN';
export const startTurn = (state) => ({
  type: START_TURN,
  state
});

export const MODIFY_ATTRIBUTE = 'MODIFY_ATTRIBUTE';
export const modifyAttribute = (fighterId, attribute, amount) => ({
  type: MODIFY_ATTRIBUTE,
  fighterId,
  attribute,
  amount
});

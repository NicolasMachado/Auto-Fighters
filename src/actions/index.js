export const TOGGLE_FRAME_RUNNING = 'TOGGLE_FRAME_RUNNING';
export const toggleFrameRunning = () => ({
  type: TOGGLE_FRAME_RUNNING
});

export const SAVE_CURRENT_FRAME = 'SAVE_CURRENT_FRAME';
export const saveCurrentFrame = (currentFrame) => ({
  type: SAVE_CURRENT_FRAME,
  currentFrame
});

import { createSignal } from 'solid-js';
import { PLAYER_START_POS, PLAYER_STEP, PLAYER_MIN, PLAYER_MAX } from '../constants';

export function usePlayer() {
  const [x, setX] = createSignal(PLAYER_START_POS);

  const moveLeft = () => setX((v) => Math.max(PLAYER_MIN, v - PLAYER_STEP));
  const moveRight = () => setX((v) => Math.min(PLAYER_MAX, v + PLAYER_STEP));

  return { x, moveLeft, moveRight };
}

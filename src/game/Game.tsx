// src/game/Game.tsx
import { onMount, onCleanup, createSignal } from 'solid-js';
import Player from '../components/Player';
import Bullet from '../components/Bullet';
import { usePlayer } from './hooks/usePlayer';

export default function Game() {
  const { x: playerX, moveLeft, moveRight } = usePlayer();
  const [bulletX, setBulletX] = createSignal(0);
  const [bulletVisible, setBulletVisible] = createSignal(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') moveLeft();
    if (e.key === 'ArrowRight') moveRight();

    if (e.key === ' ') {
      e.preventDefault();
      if (!bulletVisible()) {
        setBulletX(playerX());
        setBulletVisible(true);
      }
    }
  };

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));
  });

  return (
    <div class="game">
      <Player x={playerX()} />

      {bulletVisible() && <Bullet x={bulletX()} onRemove={() => setBulletVisible(false)} />}
    </div>
  );
}

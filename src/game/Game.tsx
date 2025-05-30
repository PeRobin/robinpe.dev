import { onMount, onCleanup } from 'solid-js';
import Player from './Player';
import Bullet from './Bullet';
import { usePlayer } from './hooks/usePlayer';
import { useBullet } from './hooks/useBullet';

export default function Game() {
  const { x: playerX, moveLeft, moveRight } = usePlayer();
  const { x: bulletX, visible: bulletVisible, shoot } = useBullet();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') moveLeft();
    if (e.key === 'ArrowRight') moveRight();

    if (e.key === ' ') {
      e.preventDefault();
      shoot(playerX());
    }
  };

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));
  });

  return (
    <div class="game">
      <Player x={playerX()} />
      {bulletVisible() && <Bullet x={bulletX()} onRemove={() => {}} />}
    </div>
  );
}

import { createSignal, onMount, onCleanup } from "solid-js";
import Player from "../components/Player";
import Bullet from "../components/Bullet";
import {
  PLAYER_START_POS,
  PLAYER_STEP,
  PLAYER_MIN,
  PLAYER_MAX,
} from "./constants";

export default function Game() {
  const [playerX, setPlayerX] = createSignal(PLAYER_START_POS);
  const [bulletX, setBulletX] = createSignal(0);
  const [bulletVisible, setBulletVisible] = createSignal(false);

  const moveLeft = () => setPlayerX(x => Math.max(PLAYER_MIN, x - PLAYER_STEP));
  const moveRight = () => setPlayerX(x => Math.min(PLAYER_MAX, x + PLAYER_STEP));

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();

    if (e.key === " ") {
      e.preventDefault();
      if (!bulletVisible()) {
        setBulletX(playerX());
        setBulletVisible(true);
      }
    }
  };

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
  });

  return (
    <div class="game">
      <Player x={playerX()} />
      {bulletVisible() && (
        <Bullet
          x={bulletX()}
          onRemove={() => setBulletVisible(false)}
        />
      )}
    </div>
  );
}
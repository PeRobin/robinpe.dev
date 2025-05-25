import { createSignal, onMount, onCleanup } from "solid-js";
import Bullet from "./components/Bullet";
import "./index.css";
import Player from "./Player";

export default function App() {
  const [showGame, setShowGame] = createSignal(false);

  onMount(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!showGame() && e.key === " ") {
        e.preventDefault();
        setShowGame(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    onCleanup(() => window.removeEventListener("keydown", handleKey));
  });

  return (
    <main>
      {!showGame() ? (
        <section>
          <h1>Robin Pedersen</h1>
          <button
            aria-label="Activate space invaders"
            class="emoji"
            onClick={() => setShowGame(true)}
          >
            🚀
          </button>
          <p class="title">Software Developer</p>
        </section>

      ) : (
        <Game />
      )}
    </main>
  );
}

function Game() {
  const START_POS = 50;
  const STEP = 5;
  const MIN = 0;
  const MAX = 100;

  const [playerX, setPlayerX] = createSignal(START_POS);
  const [bulletX, setBulletX] = createSignal(0);
  const [bulletVisible, setBulletVisible] = createSignal(false);

  const moveLeft = () => setPlayerX(x => Math.max(MIN, x - STEP));
  const moveRight = () => setPlayerX(x => Math.min(MAX, x + STEP));

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

  window.addEventListener("keydown", handleKeyDown);
  onCleanup(() => window.removeEventListener("keydown", handleKeyDown));

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
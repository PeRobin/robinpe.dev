import { createSignal } from "solid-js";
import "./index.css";

export default function App() {
  const [showGame, setShowGame] = createSignal(false);

  return (
    <main>
      {!showGame() ? (
        <section>
          <h1>Robin Pe</h1>
          <button
            aria-label="Activate game"
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
  return (
    <div class="game">
      <p>👾 Space Invaders kommer her!</p>
    </div>
  );
}
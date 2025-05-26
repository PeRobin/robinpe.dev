import { createSignal, onCleanup, onMount } from "solid-js";
import Game from "./game/Game";
import SocialLinks from "./components/SocialLinks";
import "./index.css";
import { SOCIAL_LINKS } from "./social-links";

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
          <SocialLinks
            linkedinUrl={SOCIAL_LINKS.linkedin}
            githubUrl={SOCIAL_LINKS.github}
            email={SOCIAL_LINKS.email}
          />
        </section>

      ) : (
        <Game />
      )}
    </main>
  );
}
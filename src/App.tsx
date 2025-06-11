import { createSignal, onCleanup, onMount } from 'solid-js';
import Game from './game/Game';
import SocialLinks from './components/SocialLinks';
import './index.css';
import { SOCIAL_LINKS } from './social-links';

export default function App() {
  const [showGame, setShowGame] = createSignal(false);
  const [isExiting, setIsExiting] = createSignal(false);

  const handleStartGame = () => {
    if (isExiting() || showGame()) return;
    setIsExiting(true);
    setTimeout(() => {
      setShowGame(true);
    }, 500);
  };

  onMount(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault();
        handleStartGame();
      }
    };

    window.addEventListener('keydown', handleKey);
    onCleanup(() => window.removeEventListener('keydown', handleKey));
  });

  return (
    <main>
      {!showGame() ? (
        <section classList={{ exiting: isExiting() }}>
          <h1 class="name">Robin Pedersen</h1>
          <p class="title">Software Developer</p>
          <button
            aria-label="Activate space invaders"
            class="emoji"
            onClick={handleStartGame}
          >
            🚀
          </button>
          <div class="social-links-wrapper">
            <SocialLinks
              linkedinUrl={SOCIAL_LINKS.linkedin}
              githubUrl={SOCIAL_LINKS.github}
              email={SOCIAL_LINKS.email}
            />
          </div>
        </section>
      ) : (
        <Game />
      )}
    </main>
  );
}
import { A } from '@solidjs/router';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';
import SocialLinks from '../components/SocialLinks';
import Game from '../game/Game';
import { SOCIAL_LINKS } from '../social-links';

const HOME_EXIT_TRANSITION_MS = 500;

export default function HomePage() {
  const [showGame, setShowGame] = createSignal(false);
  const [isExiting, setIsExiting] = createSignal(false);

  const handleStartGame = () => {
    if (isExiting() || showGame()) return;
    setIsExiting(true);
    setTimeout(() => {
      setShowGame(true);
    }, HOME_EXIT_TRANSITION_MS);
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
      <Title>Robin Pedersen - Systemutvikler i Oslo</Title>
      <Meta
        name="description"
        content="Robin Pedersen er en systemutvikler i Oslo med erfaring innen .NET, C#, TypeScript, React og Azure. Jobber hos Patentstyret."
      />
      <Meta property="og:title" content="Robin Pedersen – Systemutvikler i Oslo" />
      <Meta
        property="og:description"
        content="Fullstack systemutvikler i Oslo med erfaring fra Patentstyret, Cloudberries og Politiets IT-Enhet."
      />
      <Meta property="og:url" content="https://robinpe.dev" />
      {!showGame() ? (
        <section class="home" classList={{ exiting: isExiting() }}>
          <header class="home-header">
            <A class="resume-link" href="/resume">
              [Resume]
            </A>
          </header>
          <h1 class="name">Robin Pedersen</h1>
          <p class="title">Software Developer</p>
          <button aria-label="Activate space invaders" class="emoji" onClick={handleStartGame}>
            🚀
          </button>
          <div class="social-links-wrapper">
            <SocialLinks
              linkedinUrl={SOCIAL_LINKS.linkedin}
              githubUrl={SOCIAL_LINKS.github}
              email={SOCIAL_LINKS.email}
            />
          </div>
          <div class="sr-only">
            <p>
              Robin Pedersen er en systemutvikler basert i Oslo-området. Han jobber hos Patentstyret
              som Software Developer, med tidligere erfaring som Senior Consultant hos Cloudberries
              og System developer hos Politiets IT-Enhet. Teknisk kompetanse omfatter .NET, C#,
              TypeScript, JavaScript, React, Azure og moderne webapplikasjoner.
            </p>
          </div>
        </section>
      ) : (
        <Game />
      )}
    </main>
  );
}

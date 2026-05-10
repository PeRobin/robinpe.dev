import { A } from '@solidjs/router';
import { For } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';
import ResumeCard from '../components/ResumeCard';
import { RESUME_ENTRIES } from '../resume-data';

export default function ResumePage() {
  return (
    <main class="resume-main">
      <Title>Robin Pedersen - Erfaring som systemutvikler | Oslo</Title>
      <Meta
        name="description"
        content="Se Robin Pedersens erfaring som systemutvikler i Oslo. Bakgrunn fra Patentstyret, Cloudberries og Politiets IT-Enhet med .NET, C#, TypeScript, React og Azure."
      />
      <Meta property="og:title" content="Robin Pedersen – Erfaring | Systemutvikler Oslo" />
      <Meta
        property="og:description"
        content="Fullstack systemutvikler med erfaring fra Patentstyret, Cloudberries og Politiets IT-Enhet."
      />
      <Meta property="og:url" content="https://robinpe.dev/resume" />
      <section class="resume-page" aria-labelledby="resume-page-title">
        <header class="resume-page-header">
          <nav aria-label="Resume navigation">
            <A class="resume-link" href="/">
              [Home]
            </A>
          </nav>
          <h1 id="resume-page-title">Experience</h1>
        </header>

        <section class="resume-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Work history</h2>
          <div class="resume-cards">
            <For each={RESUME_ENTRIES}>
              {(entry) => (
                <ResumeCard
                  workplace={entry.workplace}
                  period={entry.period}
                  title={entry.title}
                  location={entry.location}
                  description={entry.description}
                  highlights={entry.highlights}
                />
              )}
            </For>
          </div>
        </section>
      </section>
    </main>
  );
}

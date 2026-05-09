import { A } from "@solidjs/router";
import { For } from "solid-js";
import ResumeCard from "../components/ResumeCard";
import { RESUME_ENTRIES } from "../resume-data";

export default function ResumePage() {
  return (
    <main class="resume-main">
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

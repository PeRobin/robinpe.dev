import { For, Show, type JSX } from 'solid-js';

type ResumeCardProps = {
  workplace: string;
  period: string;
  title: string;
  location: string;
  description?: string;
  highlights?: string[];
};

export default function ResumeCard(props: ResumeCardProps): JSX.Element {
  return (
    <article class="resume-card">
      <header class="resume-card-header">
        <h3 class="resume-workplace">{props.workplace}</h3>
        <p class="resume-period">{props.period}</p>
      </header>
      <p class="resume-meta">
        <span class="resume-title">{props.title}</span>
        <span aria-hidden="true"> - </span>
        <span>{props.location}</span>
      </p>
      <Show when={props.description}>
        <p class="resume-description">{props.description}</p>
      </Show>
      <Show when={props.highlights && props.highlights.length > 0}>
        <ul class="resume-highlights">
          <For each={props.highlights}>{(highlight) => <li>{highlight}</li>}</For>
        </ul>
      </Show>
    </article>
  );
}

import { For, Show, type JSX } from 'solid-js';
import type { ResumeEntry } from '../resume-data';

type ResumeCardProps = ResumeEntry;

const handleTilt: JSX.EventHandlerUnion<HTMLElement, MouseEvent> = (event) => {
  const element = event.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  const tiltX = (x - 0.5) * 2;
  const tiltY = (y - 0.5) * 2;

  element.style.setProperty('--tilt-x', tiltX.toFixed(3));
  element.style.setProperty('--tilt-y', tiltY.toFixed(3));
  element.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`);
  element.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`);
};

const resetTilt: JSX.EventHandlerUnion<HTMLElement, MouseEvent> = (event) => {
  const element = event.currentTarget as HTMLElement;
  element.style.setProperty('--tilt-x', '0');
  element.style.setProperty('--tilt-y', '0');
  element.style.setProperty('--glare-x', '50%');
  element.style.setProperty('--glare-y', '20%');
};

export default function ResumeCard(props: ResumeCardProps): JSX.Element {
  return (
    <article class="resume-card tilt-card" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
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

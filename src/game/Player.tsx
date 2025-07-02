interface PlayerProps {
  x: number;
}

export default function Player(props: PlayerProps) {
  return (
    <div
      class="player"
      style={{ left: `${props.x}%` }}
      aria-label="Spaceship (player)"
      role="img"
      tabIndex={0}
    >
      🚀
    </div>
  );
}

interface BulletProps {
  x: number;
  y: number;
}

export default function Bullet(props: BulletProps) {
  return (
    <div
      class="bullet"
      style={{
        left: `${props.x}%`,
        bottom: `${props.y}%`,
      }}
      aria-label="Bullet (player)"
      role="img"
      tabIndex={0}
    >
      💥
    </div>
  );
}

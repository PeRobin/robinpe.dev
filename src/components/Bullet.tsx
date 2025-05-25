import { createEffect, createSignal, onCleanup } from "solid-js";

interface BulletProps {
    x: number;
    onRemove: () => void;
}

export default function Bullet(props: BulletProps) {
    const START_POS = 10; // % from top
    const [y, setY] = createSignal(START_POS);

    let interval = setInterval(() => {
        setY(y => {
            const next = y + 2;
            if (next >= 100) {
                props.onRemove();
                clearInterval(interval);
            }
            return next;
        });
    }, 16);

    onCleanup(() => clearInterval(interval));

    return (
        <div
            class="bullet"
            style={{
                left: `${props.x}%`,
                bottom: `${y()}%`,
            }}
            aria-label="Bullet"
        >
            💥
        </div>
    );
}
import { createSignal, onCleanup } from "solid-js";
import { BULLET_START_Y, BULLET_STEP } from "../constants";

export function useBullet() {
    const [x, setX] = createSignal(0);
    const [y, setY] = createSignal(BULLET_START_Y);
    const [visible, setVis] = createSignal(false);

    let interval: number;

    const shoot = (startX: number) => {
        if (visible()) return;

        setX(startX);
        setY(BULLET_START_Y);
        setVis(true);

        clearInterval(interval);

        interval = window.setInterval(() => {
            setY((prevY) => {
                const nextY = prevY + BULLET_STEP;
                if (nextY >= 100) {

                    setVis(false);
                    clearInterval(interval);

                }
                return nextY;
            });
        }, 16);
    };

    onCleanup(() => {
        clearInterval(interval);
    });

    return { x, y, visible, shoot };
}
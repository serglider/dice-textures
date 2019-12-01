import { Point } from './types';

export default function calculatePipsPositions(size: number, padding: number): Point[][] {
    const smaller = padding;
    const bigger = size - padding;
    const center = size / 2;

    return [
        [{ x: center, y: center }],
        [
            { x: bigger, y: smaller },
            { x: smaller, y: bigger },
        ],
        [
            { x: bigger, y: smaller },
            { x: center, y: center },
            { x: smaller, y: bigger },
        ],
        [
            { x: smaller, y: smaller },
            { x: bigger, y: smaller },
            { x: smaller, y: bigger },
            { x: bigger, y: bigger },
        ],
        [
            { x: smaller, y: smaller },
            { x: bigger, y: smaller },
            { x: center, y: center },
            { x: smaller, y: bigger },
            { x: bigger, y: bigger },
        ],
        [
            { x: smaller, y: smaller },
            { x: bigger, y: smaller },
            { x: smaller, y: bigger },
            { x: bigger, y: bigger },
            { x: bigger, y: center },
            { x: smaller, y: center },
        ],
    ];
}

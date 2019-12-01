import { DrawConfig, Point } from './types';
import { createCirclePath } from './paths';

export default function drawCircle(
    ctx: CanvasRenderingContext2D,
    origin: Point,
    config: DrawConfig
): void {
    const { pipColor, pipStrokeColor, pipStrokeLineWidth, pipRadius } = config;
    const { x, y } = origin;
    const path: Path2D = createCirclePath(x, y, pipRadius, pipStrokeLineWidth);

    if (pipColor !== '') {
        ctx.fillStyle = pipColor;
        ctx.fill(path);
    }

    if (pipStrokeLineWidth !== 0) {
        ctx.strokeStyle = pipStrokeColor;
        ctx.lineWidth = pipStrokeLineWidth;
        ctx.stroke(path);
    }
}

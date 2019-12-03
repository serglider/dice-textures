import { TextureConfig } from './types';
import { createRectPath } from './paths';

export default function drawRect(ctx: CanvasRenderingContext2D, config: TextureConfig): void {
    const { size, cornerRadius, color, strokeColor, strokeLineWidth } = config;
    const path: Path2D = createRectPath(size, cornerRadius, strokeLineWidth);

    if (color !== '') {
        ctx.fillStyle = color;
        ctx.fill(path);
    }

    if (strokeLineWidth !== 0) {
        ctx.lineWidth = strokeLineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke(path);
    }
}

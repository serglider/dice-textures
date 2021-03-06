import { TextureConfig, Point } from './types';
import drawRect from './drawRect';
import drawCircle from './drawCircle';

export default function createDiceFace(pips: Point[], config: TextureConfig) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const { size } = config;

    canvas.width = size;
    canvas.height = size;

    drawRect(ctx, config);
    pips.forEach(pip => drawCircle(ctx, pip, config));

    return canvas;
}

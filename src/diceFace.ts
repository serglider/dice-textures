import { Config } from './types';

export default function createDiceFace(index: number, config: Config) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const {
        size,
        color,
        // cornerRadius,
        // pipColor,
        strokeColor,
        // pipStrokeColor,
        // paddingFactor,
        // pipSizeFactor
    } = config;
    console.log(index, ctx);
    canvas.width = size;
    canvas.height = size;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size, size);
    if (strokeColor) {
        ctx.strokeStyle = color;
        ctx.strokeRect(0, 0, size, size);
    }

    return canvas;
}

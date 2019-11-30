import { DrawConfig, OutputConfig } from './types';
import defaultConfigs from './defaultConfigs';
import createDiceFace from './diceFace';

export default function createDiceTextures(
    drawConfig: DrawConfig,
    outputConfig?: OutputConfig
): string[] {
    const cfg: DrawConfig = Object.assign({}, defaultConfigs.draw, drawConfig);

    const output: OutputConfig = Object.assign({}, defaultConfigs.output, outputConfig);

    const { type, quality } = output;

    const canvases: HTMLCanvasElement[] = Array.from(Array(6), initDiceFace);

    return canvases.map(canvas => canvas.toDataURL(type, quality));

    function initDiceFace(_: void, index: number): HTMLCanvasElement {
        return createDiceFace(index, cfg);
    }
}

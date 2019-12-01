import { DrawConfig, UserDrawConfig, OutputConfig, Point } from './types';
import defaultConfigs from './defaultConfigs';
import createDiceFace from './diceFace';
import calculatePipsPositions from './pipsPositions';

export default function createDiceTextures(
    drawConfig: UserDrawConfig,
    outputConfig?: OutputConfig
): string[] {
    const cfg: DrawConfig = Object.assign({}, defaultConfigs.draw, drawConfig);
    const output: OutputConfig = Object.assign({}, defaultConfigs.output, outputConfig);
    const { type, quality } = output;
    const { size, padding } = cfg;
    const pipsPositions = calculatePipsPositions(size, padding);
    const canvases: HTMLCanvasElement[] = pipsPositions.map(initDiceFace);

    return canvases.map(canvas => canvas.toDataURL(type, quality));

    function initDiceFace(pips: Point[]): HTMLCanvasElement {
        return createDiceFace(pips, cfg);
    }
}

import { TextureConfig, OutputConfig, Point } from './types';
import defaultConfigs from './defaultConfigs';
import createDiceFace from './diceFace';
import calculatePipsPositions from './pipsPositions';

/**
 * Creates an array of  6 data URI strings
 * @param textureConfig - texture configuration object
 * @param outputConfig - output configuration object
 * @return Array of  6 data URI strings
 */
export default function createDiceTextures(
    textureConfig?: Partial<TextureConfig>,
    outputConfig?: Partial<OutputConfig>
): string[] {
    const cfg: TextureConfig = Object.assign({}, defaultConfigs.texture, textureConfig);
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

import { TextureConfig, OutputConfig } from './types';

const texture: TextureConfig = {
    size: 100,
    color: 'black',
    strokeColor: 'black',
    strokeLineWidth: 0,
    cornerRadius: 0,
    padding: 24,
    pipColor: 'white',
    pipStrokeColor: 'white',
    pipStrokeLineWidth: 0,
    pipRadius: 10,
};

const output: OutputConfig = {
    type: 'image/png',
    quality: 0.92,
};

const defaultConfigs = { texture, output };

export default defaultConfigs;

import { DrawConfig, OutputConfig } from './types';

const draw: DrawConfig = {
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

const defaultConfigs = { draw, output };

export default defaultConfigs;

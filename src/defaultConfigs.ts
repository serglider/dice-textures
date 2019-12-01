import { DrawConfig, OutputConfig } from './types';

const draw: DrawConfig = {
    size: 100,
    color: '',
    cornerRadius: 0,
    pipColor: '',
    strokeColor: '',
    strokeLineWidth: 0,
    pipStrokeColor: '',
    pipStrokeLineWidth: 0,
    padding: 20,
    pipRadius: 10,
};

const output: OutputConfig = {
    type: 'image/png',
    quality: 0.92,
};

const defaultConfigs = { draw, output };

export default defaultConfigs;

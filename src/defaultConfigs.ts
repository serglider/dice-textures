import { DrawConfig, OutputConfig } from './types';

const draw: DrawConfig = {
    size: 100,
    color: 'black',
    cornerRadius: 0,
    pipColor: 'white',
    strokeColor: '',
    pipStrokeColor: '',
    paddingFactor: 0.2,
    pipSizeFactor: 0.1,
};

const output: OutputConfig = {
    type: 'image/jpeg',
    quality: 0.92,
};

const defaultConfigs = { draw, output };

export default defaultConfigs;

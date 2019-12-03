export type TextureConfig = {
    size: number;
    color: string;
    pipColor: string;
    pipRadius: number;
    padding: number;
    cornerRadius: number;
    strokeColor: string;
    strokeLineWidth: number;
    pipStrokeColor: string;
    pipStrokeLineWidth: number;
};

export type OutputConfig = {
    quality: number;
    type: string;
};

export type Point = {
    x: number;
    y: number;
};

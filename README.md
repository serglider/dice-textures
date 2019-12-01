# Dice Textures

A little module (~2kb) that generates 6 dice textures. It exposes just one functions ```createDiceTextures``` which returns an array of data URI strings.

## Setup
```dice-textures``` can be installed with npm or using a content delivery network URL to embed it on your HTML page

```bash
npm i dice-textures
```

or

```html
<script src="dist/dice-textures.umd.js"></script>
```

## Usage

```js
    const diceFaceImage = document.getElementById('diceFaceImage5');
    const diceFaceTextures = createDiceTextures(drawOptions, outputOptions);
    diceFaceImage.src = diceFaceTextures[4];
```
Both parameters are optional. For details see below.

## Options

#### Draw options
Name | Type | Default | Description
--- | --- | --- | ---
size | number  | 100| side of the square texture, px
color | string  | black | any CSS color representation
strokeColor | string  | black | any CSS color representation
strokeLineWidth | number  | 0 | width of the stroke line
cornerRadius | number  | 0 | rounded rect corner radius
padding | number  | 0 | TODO
pipColor | number  | 0 | TODO
pipStrokeColor | number  | 0 | TODO
pipStrokeLineWidth | number  | 0 | TODO
pipRadius | number  | 0 | TODO

#### Output options
Name | Type | Default | Description
--- | --- | --- | ---
type | string  | image/png| image format
quality | number  | 0.92 | compression level

For the output options details see [here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)



## License

Copyright © 2019, [Sergey Chernykh](https://github.com/serglider).
Released under the [MIT License](LICENSE).
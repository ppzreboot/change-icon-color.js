# change-icon-color.js

[中文](./readme.cn.md) | [demo](https://ppzreboot.github.io/change-icon-color.js/)

+ Change the color of monochrome images
+ [Multiple output formats](https://developer.mozilla.org/en-us/docs/web/api/offscreencanvas/converttoblob#options)

``` bash
npm install change-icon-color
```

## Usage

### Example: url -> url
``` ts
import { url_2_url } from 'change-icon-color'
import blue_img from './blue-img.png'

const red = {
  r: 255,
  g: 0,
  b: 0,
  a: 255,
}
const red_img = await url_2_url(blue_img, red)
const img = new Image()
img.src = red_img
```

### API

##### Types
``` ts
interface I_color {
  r: number
  g: number
  b: number
  a: number
}
```

##### Out of the box

The following [ImageEncodeOptions](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/convertToBlob#options) are parameters for `OffscreenCanvas.convertToBlob()`

``` ts
function file_2_file(input: File, color: I_color, encode_opts?: ImageEncodeOptions): Promise<Blob>

function img_2_url(input: HTMLImageElement, color: I_color, encode_opts?: ImageEncodeOptions): Promise<string>

function url_2_url(input: string, color: I_color, encode_opts?: ImageEncodeOptions): Promise<string>

function img_2_img(img: HTMLImageElement, color: I_color, encode_opts?: ImageEncodeOptions): Promise<HTMLImageElement>
```

##### Precise Requirements

``` ts
function img_2_img_data(img: HTMLImageElement): ImageData

function change_img_data_color(img: ImageData, color: I_color): ImageData

function img_data_2_canvas(img: ImageData): OffscreenCanvas
```

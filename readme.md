# change-icon-color.js

[demo]()

+ 修改纯色图片的颜色
+ 多种输出格式

``` bash
npm install change-icon-color
```

## 用法

### 案例: url -> url
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

##### 类型
``` ts
interface I_color {
  r: number
  g: number
  b: number
  a: number
}
```

##### 开箱即用

下面的 [ImageEncodeOptions](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/convertToBlob#options) 是 `OffscreenCanvas.convertToBlob()` 的参数

``` ts
function file_2_file(input: File, color: I_color, encode_opts?: ImageEncodeOptions): Promise<Blob>

function img_2_url(input: HTMLImageElement, color: I_color, encode_opts?: ImageEncodeOptions): Promise<string>

function url_2_url(input: string, color: I_color, encode_opts?: ImageEncodeOptions): Promise<string>

function img_2_img(img: HTMLImageElement, color: I_color, encode_opts?: ImageEncodeOptions): Promise<HTMLImageElement>
```

##### 进准需求

``` ts
function img_2_img_data(img: HTMLImageElement): ImageData

function change_img_data_color(img: ImageData, color: I_color): ImageData

function img_data_2_canvas(img: ImageData): OffscreenCanvas
```

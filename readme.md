# change-icon-color.js

[demo]()

+ 修改纯色图片的颜色
+ 多种输出格式

``` bash
npm install change-icon-color
```

## 用法

#### url -> url
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

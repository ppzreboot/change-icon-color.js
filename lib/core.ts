import { I_color } from './type'

export
function img_2_img_data(img: HTMLImageElement): ImageData {
  const canvas = new OffscreenCanvas(img.width, img.height)
    .getContext('2d')!
  canvas.drawImage(img, 0, 0)
  return canvas.getImageData(0, 0, img.width, img.height)
}

export
function change_img_data_color(img: ImageData, color: I_color): ImageData {
  const data = img.data
  const new_data = new Uint8ClampedArray(data.length)
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3]
    if (a === 0)
      continue
    new_data[i] = color.r
    new_data[i + 1] = color.g
    new_data[i + 2] = color.b
    new_data[i + 3] = a * (color.a / 255)
  }
  return new ImageData(new_data, img.width, img.height)
}

export
function img_data_2_canvas(img: ImageData): OffscreenCanvas {
  const canvas = new OffscreenCanvas(img.width, img.height)
  canvas.getContext('2d')!.putImageData(img, 0, 0)
  return canvas
}

/* out of box */

import { img_2_img_data, change_img_data_color, img_data_2_canvas } from './core'
import { I_color } from './type'

export
async function file_2_file(input: File, color: I_color, encode_opts?: ImageEncodeOptions): Promise<Blob> {
  const source = URL.createObjectURL(input)
  const img = await load_img(source)
  return await img_data_2_canvas(
    change_img_data_color(
      img_2_img_data(img),
      color,
    )
  ).convertToBlob(encode_opts)
}

export
async function img_2_url(input: HTMLImageElement, color: I_color, encode_opts?: ImageEncodeOptions): Promise<string> {
  const canvas = img_data_2_canvas(
    change_img_data_color(
      img_2_img_data(input),
      color,
    )
  )
  const blob = await canvas.convertToBlob(encode_opts)
  return URL.createObjectURL(blob)
}

export
async function url_2_url(input: string, color: I_color, encode_opts?: ImageEncodeOptions): Promise<string> {
  const img = await load_img(input)
  return img_2_url(img, color, encode_opts)
}

export
async function load_img(url: string): Promise<HTMLImageElement> {
  const img = new Image()
  await new Promise((res, rej) => {
    img.onload = res
    img.onerror = rej
    img.src = url
  })
  return img
}

export
async function img_2_img(img: HTMLImageElement, color: I_color, encode_opts?: ImageEncodeOptions): Promise<HTMLImageElement> {
  const url = await img_2_url(img, color, encode_opts)
  return await load_img(url)
}

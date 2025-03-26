import { useEffect, useState } from 'react'
import {
  I_color,
  url_2_url,
} from 'change-icon-color'

export
function App() {
  const [file, set_file] = useState<File | null>(null)
  const [color, set_color] = useState('#ff0000')

  const [output, set_output] = useState<string | null>(null)
  useEffect(() => {
    if (file === null)
      return
    const input = URL.createObjectURL(file)
    url_2_url(input, hex2rgba(color))
      .then(set_output)
      .catch(console.error)
  }, [file, color])
  return <>
    <h1>Change Icon's Color</h1>

    <label>Please Select a Image</label>
    <input
      type='file'
      accept='image/*'
      onChange={evt => set_file(evt.target.files?.[0] ?? null)}
    />
    <label>Please Select a Color</label>
    <input
      type='color'
      value={color}
      onChange={evt => set_color(evt.target.value)}
    />

    {output && <img src={output} />}
  </>
}

function hex2rgba(hex: string): I_color {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b, a: 255 }
}
 
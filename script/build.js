import { build } from 'esbuild'

build({
  entryPoints: [
    'lib/*.ts',
    // 'lib/react.tsx',
  ],
  outdir: 'lib',
  logLevel: 'debug',
})

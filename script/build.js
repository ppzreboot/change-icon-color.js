import { build } from 'esbuild'

build({
  entryPoints: [
    'lib/index.ts',
    // 'lib/react.tsx',
  ],
  outdir: 'lib',
  logLevel: 'debug',
})

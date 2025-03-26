import { build } from 'esbuild'

build({
  entryPoints: [
    'lib/mod.ts',
    // 'lib/react.tsx',
  ],
  outdir: 'lib',
  logLevel: 'debug',
})

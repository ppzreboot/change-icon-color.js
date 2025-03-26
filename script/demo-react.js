// @ts-check

import { context } from 'esbuild'

main()

async function main() {
  const ctx = await context({
    entryPoints: ['demo/react/main.tsx'],
    outdir: 'demo/react/dist/_c',
    bundle: true,
    logLevel: 'debug',
  })
  await ctx.watch()
  await ctx.serve({
    servedir: 'demo/react/dist',
  })
}

// @ts-check

import { context } from 'esbuild'

main()

async function main() {
  const ctx = await context({
    entryPoints: ['demo/vanilla/main.ts'],
    outdir: 'demo/vanilla/dist/_c',
    bundle: true,
    logLevel: 'debug',
  })
  await ctx.watch()
  await ctx.serve({
    servedir: 'demo/vanilla/dist',
  })
}

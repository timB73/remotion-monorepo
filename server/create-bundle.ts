import path from 'path';
import { bundle } from '@remotion/bundler';
import { enableTailwind } from '@remotion/tailwind';

async function main() {
  const bundleLocation = await bundle({
    entryPoint: path.resolve(process.cwd(), '../client/src/remotion/index.ts'),
    outDir: path.resolve(process.cwd(), 'out', 'output-bundle'),
    webpackOverride: (config) => {
      return {
        ...config,
        ...enableTailwind(config),
        resolve: {
          ...config.resolve,
          alias: {
            ...(config.resolve?.alias ?? {}),
            '@': path.resolve(process.cwd(), '../client/src'),
          },
        },
      };
    },
  });

  console.log(`Bundle created at ${bundleLocation}`);
}

main();

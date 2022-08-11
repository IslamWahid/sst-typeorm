import { App } from '@serverless-stack/resources';
import { fileURLToPath } from 'url';
import { Api } from './Api';

export default function main(app: App) {
  const path = fileURLToPath(import.meta.url).split('/.build')[0];
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
      esbuildConfig: {
        plugins: 'services/esbuild.cjs',
        keepNames: true,
      },
      // externalModules: ['pg-native'],
      nodeModules: ['pg-native'],
    },
    environment: {
      APP_ROOT_PATH: path,
    },
  });
  app.stack(Api);
}

import { App } from '@serverless-stack/resources';
import { Api } from './Api';

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
    },
  });
  app.stack(Api);
}

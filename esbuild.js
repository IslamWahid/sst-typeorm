const { esbuildDecorators } = require('@anatine/esbuild-decorators');

module.exports = [esbuildDecorators({ tsconfig: 'services/tsconfig.json' })];

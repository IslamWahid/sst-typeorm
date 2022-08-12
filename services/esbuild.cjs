const { esbuildDecorators } = require('@anatine/esbuild-decorators');
// const esbuildPluginTsc = require('esbuild-plugin-tsc');

module.exports = [
  esbuildDecorators({ tsconfig: 'services/tsconfig.json' }),
  // esbuildPluginTsc(),
];

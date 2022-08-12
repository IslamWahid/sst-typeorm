# sst-typeorm

Typescript example setup for serverless-stack project using Typeorm

## Necessary configs

- the bundle format must be `cjs`
- set `"type": "commonjs"` in `services/package.json`
- esbuild should reference the tsconfig.json path if it's not on the root level
- esbuild config `keepNames: true` is required
- APP_ROOT_PATH environment variable has to be set for local development
- `tsconfig.json` must have these options for the typeorm cli

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "strict": false,
  }
}
```

**Note**: esbuild config must be with .cjs extension if it's inside `services`

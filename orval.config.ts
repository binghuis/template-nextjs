import { defineConfig } from 'orval';

const INPUT = './openapi/spec.yaml';

export default defineConfig({
  swagger: {
    output: {
      workspace: 'openapi',
      target: './__service__/swagger.ts',
      client: 'swr',
      mode: 'split',
      mock: false,
      clean: true,
      override: {
        title: () => 'OpenApi',
        header: (info) =>
          [
            '此类型文件由swagger解析自动生成，请勿修改',
            '<==================================>',
            info.title,
            ...(info.version ? [`OpenAPI spec version: ${info.version}`] : []),
            ...(info.description?.match(/.{1,120}/g) ?? []),
          ].filter(Boolean),
        components: {
          // schemas: {
          //   suffix: 'DTO',
          // },
          responses: {
            suffix: 'Response',
          },
          parameters: {
            suffix: 'Params',
          },
          requestBodies: {
            suffix: 'Payload',
          },
        },
      },
    },
    input: {
      target: INPUT,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});

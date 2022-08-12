import { StackContext, Api as ApiGateway } from '@serverless-stack/resources';

export function Api({ stack }: StackContext) {
  const api = new ApiGateway(stack, 'api', {
    routes: {
      'GET /': {
        function: {
          handler: 'services/functions/main.handler',
        },
      },
    },
  });

  stack.addOutputs({
    API_URL: api.url,
  });

  return api;
}

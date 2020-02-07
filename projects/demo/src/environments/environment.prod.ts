import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: true,
  github: {
    repository: 'https://github.com/aacebo/uniform',
    components: 'https://github.com/aacebo/uniform/tree/master/projects/components/src/lib',
    raw: 'https://raw.githubusercontent.com/aacebo/uniform/master/projects/components/src/lib',
  },
};

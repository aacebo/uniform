export interface IEnvironment {
  production: boolean;
  github: {
    repository: string;
    components: string;
    raw: string;
  };
}

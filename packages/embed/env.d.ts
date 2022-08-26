export type EnvironmentVariables = {
  DATABASE_URL: string;
  EMBED_JS_URL: string;
  EMBED_STYLE_URL: string;
  WEB_APP_URL: string;
};

declare global {
  namespace NodeJS {
    type ProcessEnv = EnvironmentVariables;
  }
}

export {};
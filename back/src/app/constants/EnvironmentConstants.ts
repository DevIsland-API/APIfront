export class EnvironmentsConstants {
  public static readonly NODE_ENV_OPTIONS = [
    {
      environment: "local",
      dotenv: ".env.local",
    },
    {
      environment: "test",
      dotenv: ".env.test",
    },
    {
      environment: "development",
      dotenv: ".env.development",
    },
    {
      environment: "homolog",
      dotenv: ".env.homolog",
    },
    {
      environment: "production",
      dotenv: ".env",
    },
  ];

  public static readonly ENVIRONMENTS = {
    local: "local",
    test: "test",
    development: "development",
    homolog: "homolog",
    production: "production",
  };

  public static readonly PATHS = {
    local: ".env.local",
    test: ".env.test",
    development: ".env.development",
    homolog: ".env.homolog",
    production: ".env",
  };

  public static readonly ERROR = "Nenhum NODE_ENV foi encontrado.";
}

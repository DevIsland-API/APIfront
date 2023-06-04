const config = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: ["./src/database/migrations"],
  entities:
    process.env.NODE_ENV === "local"
      ? ["./src/app/entities/*.{js,ts}"]
      : ["./dist/src/app/entities/*.{js,ts}"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
  synchronize: false,
  logging: true,
  timezone: "America/Sao_Paulo",
};

export default config;

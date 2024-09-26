// path: ./config/env/production/database.ts

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "clhtb6lu92mj2.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dct63fh5nej8jp"),
      user: env("DATABASE_USERNAME", "ueibs0ann1qbuu"),
      password: env(
        "DATABASE_PASSWORD",
        "pc917933459e298636b4537d128d5c2d4b5f6e8c994ffaa5758e680ff9d2f3b95"
      ),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

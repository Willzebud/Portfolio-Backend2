// path: ./config/env/production/database.ts

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "cah8ha8ra8h8i7.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com",
      port: 5432,
      database: "dadjh5juvfpd2g",
      user: "u12ucegkm96488",
      password:
        "p641c0afcdbf287787836bf70f1cd63bd4ca7ce9e44b98a7c717ee85e844c30af",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

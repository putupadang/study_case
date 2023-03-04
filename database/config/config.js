/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.NEXT_PUBLIC_DB_USERNAME,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_DATABASE,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.NEXT_PUBLIC_DB_USERNAME,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_DATABASE,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    dialect: "mysql",
    logging: false,
  },
};

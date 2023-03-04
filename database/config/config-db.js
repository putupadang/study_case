// import AppConfig from "backend/config/appConfig";
import AppConfig from "./appConfig";
import { Sequelize } from "sequelize";

const dbName = AppConfig.dbName;
const dbUser = AppConfig.dbUser;
const dbHost = AppConfig.dbHost;
const dbDriver = AppConfig.dbConnection;
const dbPassword = AppConfig.dbPass;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: false,
});

export default sequelizeConnection;

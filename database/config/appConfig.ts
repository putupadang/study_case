import path from "path";

class AppConfig {
  // Database envar
  static dbConnection?: string = process.env.NEXT_PUBLIC_DB_DRIVER;
  static dbHost?: string = process.env.NEXT_PUBLIC_DB_HOST;
  static dbPort?: string = process.env.NEXT_PUBLIC_DB_PORT;
  static dbUser?: string = process.env.NEXT_PUBLIC_DB_USERNAME;
  static dbPass?: string = process.env.NEXT_PUBLIC_DB_PASSWORD;
  static dbName?: string = process.env.NEXT_PUBLIC_DB_DATABASE;
}

export default AppConfig;

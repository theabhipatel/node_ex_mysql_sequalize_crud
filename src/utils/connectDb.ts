import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../config";

export const connectDb = async () => {
  try {
    const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
      host: DB_HOST,
      port: Number(DB_PORT),
      dialect: "mysql",
    });

    await sequelize.authenticate();
    console.log("[::] Database connected ...");
  } catch (error) {
    console.log("[!] Database not connected !!!");
  }
};

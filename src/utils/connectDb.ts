import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../config";

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "mysql",
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("[::] Database connected ...");
    try {
      await sequelize.sync({ alter: true });
      console.log("[::] Database synchronized ...");
    } catch (error) {
      console.log("[!!] Database not synchronized !", error);
    }
  } catch (error) {
    console.log("[!] Database not connected !!!");
  }
};

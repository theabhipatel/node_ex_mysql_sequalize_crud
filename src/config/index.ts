import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "./.env.dev" });
} else {
  dotenv.config();
}

/** ---> General configs */
export const NODE_ENV = process.env.NODE_ENV || "DEV";
export const PORT = process.env.PORT || 3010;
export const HOSTNAME = process.env.HOSTNAME || "localhost";

/** ---> Database credentials */
export const DB_USERNAME = process.env.DB_USERNAME!;
export const DB_PASSWORD = process.env.DB_PASSWORD!;
export const DB_NAME = process.env.DB_NAME!;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT!;

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseName = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

export const dbConnection = new Sequelize({
  database: databaseName,
  username: username,
  password: password,
  host,
  dialect: "postgres",
  logging: false,
});

import { Model } from "sequelize-typescript";
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Student } from "../model/students";
dotenv.config();

const databaseName = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

const sequelize = new Sequelize({
  database: databaseName,
  username: username,
  password: password,
  host,
  dialect: "postgres",
  logging: false,
  models: [Student],
});

export default sequelize;

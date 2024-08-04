import { Sequelize } from "sequelize-typescript";
import { User } from "../model/user.model";
import dotenv from "dotenv";

dotenv.config();

const sequelize: Sequelize = new Sequelize({
  dialect: "mysql",
  host: "logistics-project-ccpv.i.aivencloud.com",
  port: 12085,
  username: "avnadmin",
  password: process.env.DB_PASS,
  database: "defaultdb",
  models: [User],
});

export default sequelize;

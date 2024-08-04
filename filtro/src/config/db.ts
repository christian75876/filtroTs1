import { Sequelize } from "sequelize-typescript";
import { User } from "../model/user.model";
import dotenv from "dotenv";
import { Product } from "../model/product.model";
import { Sale } from "../model/sale.model";

dotenv.config();

const sequelize: Sequelize = new Sequelize({
  dialect: "mysql",
  host: "logistics-project-ccpv.i.aivencloud.com",
  port: 12085,
  username: "avnadmin",
  password: process.env.DB_PASS,
  database: "defaultdb",
  models: [User, Product, Sale],
});

export default sequelize;

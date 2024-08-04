import "reflect-metadata";
import Express from "express";
import router from "./routes/Router";
import sequelize from "./config/db";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = Express();

app.use(Express.json());
router.use(authMiddleware);
app.use("/api", router);

const start = (): void => {
  try {
    sequelize.authenticate();
    console.log("Connected to the database");
    sequelize.sync();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    throw new Error("Error connecting to the database");
  }
};

start();

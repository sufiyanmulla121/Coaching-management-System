import express, { Request, Response, NextFunction } from "express";
import { dbConnection } from "../src/config/db_config";

dbConnection
  .authenticate()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Error :" + err);
  });

const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Welcome To firebase Login" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

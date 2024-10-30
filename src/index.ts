import express, { Request, Response, NextFunction } from "express";
import sequelize from "./config/db_config";
import admin from "firebase-admin";
import serviceAccount from "../serviceAccount.json";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";

const app = express();
const port = process.env.port;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Error :" + err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Welcome To Coaching Management" });
});

app.use("/api", routes);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

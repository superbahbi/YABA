import dotenv from "dotenv";
import express, { Express, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import { AppDataSource } from './utils/data-source';
dotenv.config();

AppDataSource.initialize().then(async () => {
  const app: Express = express();

  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  if (process.env.NODE_ENV === 'development') app.use(morgan("dev"));

  app.use("/api/", userRoutes);
  app.use("/api/", authRoutes);
  app.get("/", async (_, res: Response) => {
    res.json({ message: "YABA backend server" }); // Send a JSON response to the client
  });

  app.listen(process.env.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(
      "⚡️[Server]: App is running at http://localhost:%d",
      process.env.PORT
    );
    // tslint:disable-next-line:no-console
    console.log("  Press CTRL-C to stop\n");
  });
}).catch(error => console.log("TypeORM connection error: ", error));
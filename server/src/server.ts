import dotenv from "dotenv";
import express, { Express, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
dotenv.config();
const app: Express = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
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

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("YABA backend server"); // Send a response to the client
});

app.listen(process.env.PORT, () => {
  console.log(
    "⚡️[server]: App is running at http://localhost:%d",
    process.env.PORT
  );
  console.log("  Press CTRL-C to stop\n");
});

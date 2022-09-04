import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
const app: Express = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/", userRoutes);
app.use("/api/", authRoutes);
app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "YABA backend server" }); // Send a JSON response to the client
});

// app.post("/api/login", authController.login);
// app.post("/api/register", authController.register);

app.listen(process.env.PORT, () => {
  console.log(
    "⚡️[server]: App is running at http://localhost:%d",
    process.env.PORT
  );
  console.log("  Press CTRL-C to stop\n");
});

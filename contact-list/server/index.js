import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appRoutes from "./app.js"
import connectDB from "./src/config/connection.js";
import { PORT } from "./src/config/envConfig.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
connectDB();

app.use("/api", appRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

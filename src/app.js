import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes)


export default app;
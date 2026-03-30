import express from "express";

const app = express();

// middleware
app.use(express.json());

// routes
import authRoutes from "./modules/auth/auth.routes.js";

app.use("/api/auth", authRoutes);

export default app;
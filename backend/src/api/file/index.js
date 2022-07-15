// Dependencies
import express from "express";

// User Dependencies
import FileController from "./controller";
import FileRouter from "./routes";

// Injecting Dependencies
const router = express.Router();
const fileController = new FileController();
const fileRouter = new FileRouter(router, fileController);
const fileRoutes = fileRouter.setRoutes();

export { fileRoutes };

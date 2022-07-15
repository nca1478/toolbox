// Dependencies
import express from "express";
import logger from "morgan";
import chalk from "chalk";
import cors from "cors";

// Routes
import { fileRoutes } from "../api/file";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;

        // Settings App
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Cors Access
        this.app.use(cors());
        this.app.use(
            logger(
                ":method :url :status :response-time ms - :res[content-length] [:date[clf]] :remote-addr"
            )
        );

        // Bodyparser
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        // Static Files
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use("/files", fileRoutes);
    }

    listen() {
        const port = this.port;
        this.app.listen(port, () => {
            console.log(
                `${chalk.yellow(
                    "[code-challenge:API]"
                )} Listening on port ${port}`
            );
        });
    }
}

module.exports = Server;

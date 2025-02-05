import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import middleware from "./middleware";
import mainRoutes from "./routes";
import config from "./config";

const routesPrefix = `${config.SERVER_API_PREFIX}/v${config.SERVER_API_VERSION}`;

const app = express();

app.use(express.json() , express.urlencoded({ extended: true }), cors(), helmet(), morgan("dev"));

app.use(routesPrefix, mainRoutes);

app.get("/health", middleware.healthCheck);
app.use('*', middleware.catchAll);
app.use(middleware.errorHandler);

export default app;
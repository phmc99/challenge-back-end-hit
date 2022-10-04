import { Express } from "express";
import { planetRouter } from "./planet";

export const initializeRoutes = (app: Express) => {
  app.use("/planets", planetRouter());
};

import { Router } from "express";
import {
  getAll,
  getById,
  post,
  remove,
} from "../controllers/planet.controller";
import { planetSchema } from "../entities/schemas/planet.schema";
import { validate } from "../middlewares/validation.middleware";

const router = Router();

export const planetRouter = () => {
  router.post("", validate(planetSchema), post);
  router.get("", getAll);
  router.get("/:id", getById);
  router.delete("/:id", remove);

  return router;
};

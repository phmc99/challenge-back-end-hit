import { Router } from "express";
import {
  getAll,
  getById,
  post,
  remove,
} from "../controllers/planet.controller";

const router = Router();

export const planetRouter = () => {
  router.post("", post);
  router.get("", getAll);
  router.get("/:id", getById);
  router.delete("/:id", remove);

  return router;
};

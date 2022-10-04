import { NextFunction, Request, Response } from "express";
import { SchemaOf } from "yup";
import { INewPlanet } from "../interfaces";

export const validate =
  (schema: SchemaOf<INewPlanet>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;
    try {
      req.body = await schema.validate(resource);
      next();
    } catch (e: any) {
      res.status(400).json({ status: "error", message: e.errors.join(", ") });
    }
  };

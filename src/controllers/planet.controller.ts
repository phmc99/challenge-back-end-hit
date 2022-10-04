import { NextFunction, Request, Response } from "express";
import {
  create,
  destroy,
  findAll,
  findById,
  findByName,
} from "../services/planet.service";
import { paginateData } from "../utils";

export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPlanet = await create(req.body);
    res.status(201).json(newPlanet);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, page, per_page } = req.query;

    if (name) {
      const planetByName = await findByName(name.toString());
      res.status(200).json(planetByName);
    }

    const planets = await findAll();

    res.status(200).json(paginateData(planets, Number(page), Number(per_page)));
  } catch (error) {
    next(error);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const planet = await findById(id);

    res.status(200).json({ planet });
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await destroy(id);

    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

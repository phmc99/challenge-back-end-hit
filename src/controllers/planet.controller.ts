import { NextFunction, Request, Response } from "express";

export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "working post" });
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
    const { name } = req.query;

    if (name) {
      res.status(200).json({ message: "working getName" + name });
    }

    res.status(200).json({ message: "working getAll" });
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
    res.status(200).json({ message: "working getId" + id });
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
    res.status(200).json({ message: "working delete" + id });
  } catch (error) {
    next(error);
  }
};

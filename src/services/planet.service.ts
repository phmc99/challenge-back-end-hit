import AppDataSource from "../data-source";
import Planet from "../entities/planet.entity";
import AppError from "../errors/app-error";
import { INewPlanet } from "../interfaces";
import { starWarsPlanets } from "../utils";

const planetRepository = AppDataSource.getRepository(Planet);

export const create = async (planetBody: INewPlanet) => {
  const planets = await starWarsPlanets();

  let ocurrencesInMovies = planets[planetBody.name] || 0;

  const newPlanet = planetRepository.create({
    ...planetBody,
    starWarsMovies: ocurrencesInMovies,
  });

  await planetRepository.save(newPlanet);

  return newPlanet;
};

export const findAll = async () => {
  const planets = await planetRepository.find();
  return planets;
};

export const findByName = async (name: string) => {
  const planet = await planetRepository.findOne({
    where: { name: name.toLowerCase() },
  });
  if (!planet) {
    throw new AppError("planet not found!", 404);
  }
  return planet;
};

export const findById = async (id: string) => {
  const planet = await planetRepository.findOneBy({ id });
  if (!planet) {
    throw new AppError("planet not found!", 404);
  }
  return planet;
};

export const destroy = async (id: string) => {
  const planet = await planetRepository.findOneBy({ id });

  if (!planet) {
    throw new AppError("planet not found!", 404);
  }

  await planetRepository.remove([planet]);

  return;
};

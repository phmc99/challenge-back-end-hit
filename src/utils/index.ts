import axios from "axios";
import { IFilm, IFilmsResponse, IPlanetResponse } from "../interfaces";

export const paginateData = (data: any, page: number, perPage = 5) => {
  page = page.toString() === "NaN" ? 1 : page;
  perPage = perPage.toString() === "NaN" ? 5 : perPage;

  const lastPage = Math.ceil(data.length / perPage);

  if (page > lastPage) {
    page = lastPage;
  }

  const start = (page - 1) * perPage;

  const end = start + perPage;

  const dataSliced = data.slice(start, end);

  const previousPage =
    page - 1 >= 1 ? `?page=${page - 1}&per_page=${perPage}` : null;
  const nextPage =
    end < data.length ? `?page=${page + 1}&per_page=${perPage}` : null;

  return {
    page: page,
    per_page: perPage,
    previous_page: previousPage,
    next_page: nextPage,
    last_page: lastPage,
    data: dataSliced,
  };
};

export const starWarsApi = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const starWarsPlanets = async () => {
  const {
    data: { results },
  }: IFilmsResponse = await starWarsApi.get("/films");

  const planetsUrls: Array<string[]> = results.map(
    (item: IFilm) => item.planets
  );

  const planets: string[] = planetsUrls.flat();

  const planetsNames: string[] = await Promise.all(
    planets.map(async (planetUrl: string) => {
      const { data }: IPlanetResponse = await axios.get(planetUrl);
      return data.name.toLowerCase();
    })
  );

  const countPlanetOcurrences = planetsNames.reduce(
    (acc: any, item: string) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    },
    {}
  );

  return countPlanetOcurrences;
};

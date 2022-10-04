export interface IPlanetResponse {
  data: {
    name: string;
    rotation_period: string | number;
    orbital_period: string | number;
    diameter: string | number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string | number;
    population: string | number;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  };
}

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IFilmsResponse {
  data: {
    count: number;
    next: null | string;
    previous: null | string;
    results: Array<IFilm>;
  };
}

export interface INewPlanet {
  name: string;
  climate: string;
  terrain: string;
}

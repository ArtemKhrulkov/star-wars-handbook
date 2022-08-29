export type CategoriesCardsType = {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
};

export type CharactersType = {
  count: number;
  next?: string;
  previous?: string;
  results: CharacterType[];
};

export type FilmsType = {
  count: number;
  next?: string;
  previous?: string;
  results: FilmType[];
};

export type CharacterType = {
  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type FilmType = {
  characters: string[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
};

export type EntityType = CharacterType | FilmType;

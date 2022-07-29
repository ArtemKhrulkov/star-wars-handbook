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

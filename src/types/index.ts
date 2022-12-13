export type CharacterDataType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type EpisodeDataType = {
  id: number;
  name: string;
  air_data: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type LocationDataType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type CharacterResponseDataType = {
  info: {
    count: number;
    next: string;
    pages: number;
  };
  results: CharacterDataType[];
};

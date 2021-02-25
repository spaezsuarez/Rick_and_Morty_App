import HTTPClient from "./HTTPClient";

export const BASE_URL = "https://rickandmortyapi.com/api/";
const RickApi = new HTTPClient(BASE_URL);

export const getCharacters = ({page = ' ' , name = ' ', status = ' ', species = ' ', gender = ' '}) => {
  const params = new URLSearchParams({ page, name, status, species, gender });
  return RickApi.get(`character?${params}`);
}

export const getCharacter = (id = 0) =>{
  return RickApi.get(`character/${id}`);
}

export const getCharactersEpisode = (ids = '') => {
  return RickApi.get(`character/${ids}`);
}

export const getEpisodes = ({page = '',name = ''}) => {
  const params = new URLSearchParams({ page,name });
  return RickApi.get(`episode?${params}`);
}

export const getEpisode = ({id = ' '}) => {
  return RickApi.get(`episode/${id}`);
}

export const getLocations = ({page = '',type = '',dimension = ''}) => {
  const params = new URLSearchParams({ page,type,dimension });
  return RickApi.get(`location?${params}`);
}

export const getLocation = ({id = ''}) => {
  return RickApi.get(`location/${id}`);
}

export const getEpisodesByCharacter = (ids = '') => {
  return RickApi.get(`location/${ids}`);
}

export const getCharactersByLocation = (ids='') => {
  return RickApi.get(`character/${ids}`);
}
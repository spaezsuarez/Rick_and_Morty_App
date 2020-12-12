import HTTPClient from './HTTPClient';

export const BASE_URL = 'https://rickandmortyapi.com/api/';
const RickApi = new HTTPClient(BASE_URL);

export function getCharacters(page) {
  return RickApi.get(`character?page=${page}`);
}
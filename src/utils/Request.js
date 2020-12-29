import HTTPClient from "./HTTPClient";

export const BASE_URL = "https://rickandmortyapi.com/api/";
const RickApi = new HTTPClient(BASE_URL);

export function getCharacters({ page = '', name = '', status = '', species = '', gender = '' }) {

  const params = new URLSearchParams({ page, name, status, species, gender });
  return RickApi.get(`character?${params}`);
}

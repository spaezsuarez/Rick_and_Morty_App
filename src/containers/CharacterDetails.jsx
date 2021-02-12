import React from 'react';
import useFetch from '../hooks/useFetch';
import { getCharacter } from '../utils/Request';
import CharacterDetail from '../components/Character/CharacterDetail/CharacterDetail';


const CharacterDetails = ({ id }) => {

  const { data, loading, error } = useFetch(() => getCharacter(id), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
          <CharacterDetail {...data} />
          )
      }
    </>
  );

}

export default CharacterDetails;
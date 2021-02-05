import React from 'react';
import useFetch from '../hooks/useFetch';
import { getCharacter } from '../utils/Request';

const CharacterDetail = ({id}) => {
    
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
            <div>{data.name}</div>
          )}
        </>
      );

}

export default CharacterDetail;
import React from 'react';
import useFetch from '../hooks/useFetch';
import { getEpisode,getCharacters } from '../utils/Request';
import EpisodeDetail from '../components/Episodes/EpisodeDetail/EpisodeDetail';
import Loading from '../components/Shared/Loading/Loading';

const EpisodeDetailContainer = ({id}) => {
    const { data, loading, error } = useFetch(() => getEpisode({id}), [id]);
    
    return (
        <>
          {loading ? (
            <Loading title="Cargando"/>
          ) : error ? (
            <p>Ha ocurrido un error ({error.message})</p>
          ) : (
              <>
               <EpisodeDetail {...data}/>

              </>
              )
          }
        </>
      );

}

export default EpisodeDetailContainer;
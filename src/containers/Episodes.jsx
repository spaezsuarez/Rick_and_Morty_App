import React, { useState } from 'react';
import { getEpisodes } from '../utils/Request';
import useFetch from '../hooks/useFetch';
import PaginationBar from '../components/Shared/PaginationBar/PaginationBar';
import ListGrid from '../components/Shared/ListGrid/ListGrid';
import EpisodeCard from '../components/Episodes/EpisodeCard/EpisodeCard';

const Episodes = () => {
  //Variables de estado del contenedor de episodios
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(() => getEpisodes({ page }), [page]);

  return <>
    <PaginationBar
      readOnly={loading}
      current={page}
      max={!(loading || error) ? +data.info.pages : 1}
      onChangePage={setPage}
    />
    {loading ? (
      <p>loading...</p>
    ) : error ? (
      <p>Ha ocurrido un error ({error.message})</p>
    ) : (
          <>
            <ListGrid>
              {data.results.map(item => (
                <EpisodeCard key={item.id} {...item} />
              ))}
            </ListGrid>
          </>
        )}
  </>


}

export default Episodes;
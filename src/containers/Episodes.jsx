import React,{ useState } from 'react';
import { getEpisodes } from '../utils/Request';
import useFetch from '../hooks/useFetch';
import EpisodeList from '../components/Episodes/EpisodeList/EpisodeList';
import PaginationBar from '../components/Shared/PaginationBar/PaginationBar';

const Episodes = () => {
    //Variables de estado del contenedor de episodios
    const [page,setPage] = useState(1);
    const { data , loading , error } = useFetch(() => getEpisodes({page}),[page]);

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
            <EpisodeList items={data.results} />
        </>
          )}
    </>


}

export default Episodes;
import React, { useState } from 'react';
import { getEpisodes } from '../utils/Request';
import useFetch from '../hooks/useFetch';
import useFormControl from '../hooks/useFormControl';
import PaginationBar from '../components/Shared/PaginationBar/PaginationBar';
import ListGrid from '../components/Shared/ListGrid/ListGrid';
import EpisodeCard from '../components/Episodes/EpisodeCard/EpisodeCard';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Loading from '../components/Shared/Loading/Loading';


const Episodes = () => {
  //Variables de estado del contenedor de episodios
  const [page, setPage] = useState(1);
  const [input, handleChange, handleSubmit] = useFormControl({
    name: ""
  });
  
  const { data, loading, error } = useFetch(() => getEpisodes({ page,...input} ), [page,input.name]);

  return <>

    <Form>
      <FormControl
        className="mb-1 mr-sm-2"
        name="name"
        placeholder="Episode name"
        value={input.name}
        onChange={handleChange}
      />
    </Form>

    <PaginationBar
      readOnly={loading}
      current={page}
      max={!(loading || error) ? +data.info.pages : 1}
      onChangePage={setPage}
    />
    {loading ? (
      <Loading title="Cargando" />
    ) : error ? (
      <p>Ha ocurrido un error ({error.message})</p>
    ) : (
          <>
          <div className="position-reltive overflow-hidden p-3 p-md-5 m-md-3">
          <ListGrid>
              {data.results.map(item => (
                <EpisodeCard key={item.id} {...item} />
              ))}
            </ListGrid>
          </div>
          </>
        )}
  </>


}

export default Episodes;
import React, { useState } from "react";
//Funciones
import { getCharacters } from "../utils/Request";
import useFormControl from '../hooks/useFormControl';
import useFetch from '../hooks/useFetch';
//Componentes
import ListGrid from '../components/Shared/ListGrid/ListGrid';
import CharacterFilters from "../components/Character/CharacterFilters/CharacterFilters";
import PaginationBar from '../components/Shared/PaginationBar/PaginationBar';
import CharacterCard from '../components/Character/CharacterCard/CharacterCard';
import Loading from '../components/Shared/Loading/Loading';
import Error from '../pages/Error/Error';

const Characters = () => {

  const [page, setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const { data, loading, error } = useFetch(() => getCharacters({ page, ...filters }), [page]);

  const resetPage = () => {
    setPage(1); // Cambiar la viariable de estado "page"
  };


  return (
    <>
      <br />
      <CharacterFilters
        readOnly={loading}
        inputs={filters}
        onChange={handleChange}
        onSubmit={handleSubmit(resetPage)}
      />
      <PaginationBar
        readOnly={loading}
        current={page}
        max={!(loading || error) ? +data.info.pages : 1}
        onChangePage={setPage}
      />
      {loading ? (
        <Loading title="Cargando"/>
      ) : error ? (
        <Error></Error>
      ) : (
            <>
              <ListGrid>
                {data.results.map(item => (
                  <CharacterCard key={item.id} {...item} background="primary" />
                ))}
              </ListGrid>

            </>
          )}
    </>
  );
};

export default Characters;

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
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <center>
            <h3>Ver Personajes</h3>
          </center>
        </div>
      </div>
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
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
            <>
              <ListGrid>
                {data.results.map(item => (
                  <CharacterCard key={item.id} {...item} />
                ))}
              </ListGrid>

            </>
          )}
    </>
  );
};

export default Characters;

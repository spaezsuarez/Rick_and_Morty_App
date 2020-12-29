import React from "react";
//Funciones
import { getCharacters } from "../utils/Request";
import useFormControl from '../hooks/useFormControl';
import useInputControl from '../hooks/useInputControl';
import useFetch from '../hooks/useFetch';
//Componentes
import Form from "react-bootstrap/Form";
import CharacterList from "../components/CharacterList/CharacterList";
import CharacterFilters from "../components/CharacterFilters/CharacterFilters";


const Characters = () => {

  const [page, setPage] = useInputControl(1);
  const [filters, setFilters, onSubmit] = useFormControl({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const {data,loading,error,reFetch} = useFetch(() => getCharacters({page,...filters}),[page]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <center>
            <h3>Ver Personajes</h3>
          </center>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control
                type="number"
                name="page"
                placeholder="Ingrese el número de la pagina"
                value={page}
                onChange={setPage}
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      <CharacterFilters
        filters={filters}
        onChange={setFilters}
        onSubmit={onSubmit(reFetch)}
      />

      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <Form.Text className="text-muted">
                <center>
                  Tener en cuenta que maximo se pueden ver {data.info.pages}{" "}
                  paginas.
                </center>
              </Form.Text>
            </div>
          </div>

          <CharacterList items={data.results} />
        </>
      )}
    </>
  );
};

export default Characters;

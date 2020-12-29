import React, { useEffect, useState } from "react";
//Funciones
import { getCharacters } from "../utils/Request";
import useFormControl from '../hooks/useFormControl';
import useInputControl from '../hooks/useInputControl';
//Componentes
import Form from "react-bootstrap/Form";
import CharacterList from "../components/CharacterList/CharacterList";
import CharacterFilters from "../components/CharacterFilters/CharacterFilters";


const Characters = () => {

  //Variables de estado
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useInputControl(1);
  
  //Creación de filtros
  const [filters, setFilters, onSubmit] = useFormControl({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  //Funcion para llamar los datos
  const getData = (params) => {
    setLoading(true);
    getCharacters(params)
      .then((resData) => {
        setError(null);
        setData(resData);
        setLoading(false);
      })
      .catch((resError) => {
        setData(null);
        setError(resError);
        setLoading(false);
      });
  };

  // filosofía: Realizar operaciones para SINCRONIZAR el estado
  useEffect(() => {
    getData({ page });
  }, [page]);

  const handleSubmit = (e) => {
    getData({ page, ...filters });
  };

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
        onSubmit={onSubmit(handleSubmit)}
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

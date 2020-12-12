import React, { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import { getCharacters } from "../utils/Request";
import Form from "react-bootstrap/Form";

const Characters = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // filosofía: Realizar operaciones para SINCRONIZAR el estado
  useEffect(() => {
    setLoading(true);
    getCharacters(page)
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
  }, [page]);

  const handlePage = (e) => setPage(parseInt(e.target.value));

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <h3>Ver Personajes</h3>
          <Form>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Enter number"
                value={page}
                onChange={handlePage}
              />
              <Form.Text className="text-muted">
                Tener en cuenta que maximo se pueden ver 34 paginas.
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </div>

      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <>
          <CharacterList items={data.results} />
        </>
      )}
    </>
  );
};

export default Characters;

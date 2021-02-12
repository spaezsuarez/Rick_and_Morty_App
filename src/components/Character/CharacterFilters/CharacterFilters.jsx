import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CharacterFilters = ({filters,onChange,onSubmit}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-4">
        <Form className="justify-content-center" onSubmit={onSubmit}>
          <Form.Group inline>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del personaje"
              value={filters.name}
              name="name"
              onChange={onChange}
            />

            <Form.Control
              type="text"
              name="species"
              placeholder="Ingrese la especie"
              value={filters.species}
              onChange={onChange}
            />
            <hr></hr>
            <Form.Control
              as="select"
              name="status"
              value={filters.status}
              onChange={onChange}
            >
              <option value="">Seleccione un estatus</option>
              <option value="Alive">alive</option>
              <option value="Dead">Dead</option>
              <option value="Unknown">Unknown</option>
            </Form.Control>

            <Form.Control
              as="select"
              name="gender"
              value={filters.gender}
              onChange={onChange}
            >
              <option value="">Seleccione un sexo</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">GenderLess</option>
              <option value="unknown">Unknown</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <div class="d-grid gap-2 col-6 mx-auto">
            <Button variant="primary" type="submit" size="lg" block>
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CharacterFilters;

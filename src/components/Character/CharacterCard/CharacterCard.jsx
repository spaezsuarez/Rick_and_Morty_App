import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, status, species, gender, image, origin = {} }) => {
  return (
    <Link to={`/character/${id}`}>
      <Card bg="primary" text="white" className="mb-2">
        <Card.Img variant="top" src={image} alt={name} title={name} />
        <Card.Header>
          {name} ({status})
      </Card.Header>
        <Card.Body>
          <ul>
            <li>Species: {species}</li>
            <li>Gender: {gender}</li>
            <li>Origin: {origin.name}</li>
          </ul>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CharacterCard;

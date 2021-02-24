import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, status,image,background}) => {
  return (
    <Link to={`/character/${id}`}>
      <Card bg={background} text="white" className="mb-2">
        <Card.Img variant="top" src={image} alt={name} title={name} />
        <Card.Header>
          {name} ({status})
      </Card.Header>
      </Card>
    </Link>
  );
};

export default CharacterCard;

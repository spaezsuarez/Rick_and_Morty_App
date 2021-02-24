import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const LocationCard = ({ id,name,type,dimension }) => {
    return <Link to={`/location/${id}`}>
    <Card bg="secondary" text="white" className="mb-2">
      <Card.Header>
        {name}
    </Card.Header>
    <Card.Body>
      <Card.Text>
        <ul>
          <li>Type: {type}</li>
          <li>Dimension: {dimension}</li>
        </ul>
      </Card.Text>
    </Card.Body>
    </Card>
  </Link>
}

export default LocationCard;
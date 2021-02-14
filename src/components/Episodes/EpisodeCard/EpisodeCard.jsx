import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const EpisodeCard = ({ id, name, air_date, episode }) => {
    return <>
        <Link to={`/episode/${id}`}>
            <Card bg="info" text="white" className="mb-2">
                <Card.Img variant="top" src={image} alt={name} title={name} />
                <Card.Header>
                    {episode}:{name} 
                </Card.Header>
                <Card.Body>
                    {air_date}
                </Card.Body>
            </Card>
        </Link>
    </>

}

export default EpisodeCard;
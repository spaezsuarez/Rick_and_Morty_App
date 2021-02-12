import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

const CharacterDetail = ({name,image,origin,species,gender,status}) => {
    return <div className="container-fluid">
        <Jumbotron>
            <div  className="d-flex justify-content-center">
                <h1>{name}</h1>
            </div>
            <div  className="d-flex justify-content-center">
                <Image src={image} alt={name} roundedCircle />
            </div>
        </Jumbotron>
        <hr></hr>
        <ul>
            <li>Especie: {species}</li>
            <li>Genero: {gender}</li>
            <li>Origen: {origin.name}</li>
        </ul>

    </div>
}

export default CharacterDetail;
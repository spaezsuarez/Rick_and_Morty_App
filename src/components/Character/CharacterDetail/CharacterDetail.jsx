import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import styles from './CharacterDetail.module.scss';

const CharacterDetail = ({name,image,origin,species,gender,status}) => {
    return <div className="container-fluid">
        <Jumbotron>
            <div  className="d-flex justify-content-center">
                <h1>{name}</h1>
            </div>
            <div  className="d-flex justify-content-center">
                {(status === 'Alive')?<Image src={image} alt={name} roundedCircle />:<Image className={styles.img} src={image} alt={name} roundedCircle />}
            </div>
            <hr/>
            <ul>
            <li>Especie: {species}</li>
            <li>Genero: {gender}</li>
            <li>Origen: {origin.name}</li>
        </ul>
        </Jumbotron>
    </div>
}

export default CharacterDetail;
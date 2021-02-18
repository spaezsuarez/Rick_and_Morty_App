import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import styles from './CharacterDetail.module.scss';
import ListGrid from '../../Shared/ListGrid/ListGrid';
import { getIds } from '../../../utils/processUrl';

const CharacterDetail = ({ name, image, origin, species, gender, status }) => {

    return <div className="container-fluid">
        <Jumbotron>
            <div className="d-flex justify-content-center">
                <h1>{name}</h1>
            </div>
            <div className="d-flex justify-content-center">
                {(status === 'Dead') ? (
                    <Image className={styles.img} src={image} alt={name} roundedCircle />
                ) :(
                    <Image src={image} alt={name} roundedCircle />
                ) 
                }
            </div>
            <hr />
            <h3>Datos del personaje:</h3>
            <ul>
                <li>Especie: {species}</li>
                <li>Genero: {gender}</li>
                <li>Origen: {origin.name}</li>
                <li>Status: {status}</li>
            </ul>
        </Jumbotron>

    </div>
}

export default CharacterDetail;
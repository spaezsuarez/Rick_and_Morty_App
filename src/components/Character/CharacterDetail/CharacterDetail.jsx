import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import styles from './CharacterDetail.module.scss';
import Loading from '../../Shared/Loading/Loading';
import useFetch from '../../../hooks/useFetch';
import Error from '../../../pages/Error/Error';
import ListGrid from '../../Shared/ListGrid/ListGrid';
import { getIds } from '../../../utils/processUrl';
import { getEpisodesByCharacter } from '../../../utils/Request';
import LocationCard from '../../Locations/LocationCard/LocationCard';

const CharacterDetail = ({ name, image, origin, species, gender, status,episode }) => {

    const { data, loading, error } = useFetch(() => getEpisodesByCharacter(getIds(episode)), []);

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

        {loading ? (
            <Loading title="Cargando" />
        ) : error ? (
            <Error></Error>
        ) : (
            <>
            <div className="d-flex justify-content-center">
                <h3>Episodios en los que aparece el personaje </h3>
            </div>
            <ListGrid>
            {
                data.map((e) => {
                    if(e.name !== 'unknown')
                        return <LocationCard key={e.id} {...e}  />
                })
            }
            </ListGrid>
            </>
            )
        }

    </div>
}

export default CharacterDetail;
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGrid from '../../Shared/ListGrid/ListGrid';
import useFetch from '../../../hooks/useFetch';
import { getCharactersEpisode } from '../../../utils/Request';
import { getIds } from '../../../utils/processUrl';
import CharacterCard from '../../Character/CharacterCard/CharacterCard';
import Loading from '../../Shared/Loading/Loading';
import Error from '../../../pages/Error/Error';

const LocationDetail = ({ id, name, type, dimension,residents }) => {
    const { data, loading, error } = useFetch(() => getCharactersEpisode(getIds(residents)), []);
    return <>
        <br />
        <div className="container-fluid">
            <Jumbotron>
            <div className="d-flex justify-content-center">
                <h1>{name}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <ul>
                    <li>Type: {type}</li>
                    <li>Dimension: {dimension}</li>
                </ul>
            </div>
            </Jumbotron>
        </div>

        {loading ? (
            <Loading title="Cargando" />
        ) : error ? (
           <Error></Error>
        ) : (
            <>
            <div className="d-flex justify-content-center">
                <h3>Residentes que viven en este lugar </h3>
            </div>
            <ListGrid>
            {
                data.map((personaje) => {
                    return <CharacterCard key={personaje.id} {...personaje}  background="danger" />
                })
            }
            </ListGrid>
            </>
            )
        }
    </>
}

export default LocationDetail;
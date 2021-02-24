import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGrid from '../../Shared/ListGrid/ListGrid';
import useFetch from '../../../hooks/useFetch';
import { getCharactersEpisode } from '../../../utils/Request';
import { getIds } from '../../../utils/processUrl';
import CharacterCard from '../../Character/CharacterCard/CharacterCard';
import Loading from '../../Shared/Loading/Loading';



const EpisodeDetail = ({ id, name, air_date, episode, characters }) => {
    const { data, loading, error } = useFetch(() => getCharactersEpisode(getIds(characters)), []);
    return <>
        <div className="container-fluid">
            <Jumbotron>
                <div className="d-flex justify-content-center">
                    <h1>{name}</h1>
                </div>
                <ul>
                    <li>Season: {episode.substring(0, 3)}</li>
                    <li>Air date: {air_date}</li>
                </ul>
            </Jumbotron>
        </div>
       
        {loading ? (
            <Loading title="Cargando" />
        ) : error ? (
            <p>Ha ocurrido un error ({error.message})</p>
        ) : (
            <>
            <h3>Personajes que participarón en el capitulo </h3>
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

export default EpisodeDetail;
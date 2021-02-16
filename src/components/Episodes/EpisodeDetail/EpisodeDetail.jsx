import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const EpisodeDetail = ({id,name,air_date,episode}) => {
    return <>
        <div className="container-fluid">
        <Jumbotron>
            <div  className="d-flex justify-content-center">
                <h1>{name}</h1>
            </div>
            <ul>
                <li>Season: {episode.substring(0,3)}</li>
                <li>Air date: {air_date}</li>
            </ul>
        </Jumbotron>
    </div>
    </>


}

export default EpisodeDetail;
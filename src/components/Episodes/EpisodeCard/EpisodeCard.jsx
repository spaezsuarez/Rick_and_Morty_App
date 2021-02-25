import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styles from './EpisodeCard.module.scss';
import imgUno from '../../../../assets/Episode/1.png';
import imgDos from '../../../../assets/Episode/2.png';
import imgTres from '../../../../assets/Episode/3.png';
import imgCuatro from '../../../../assets/Episode/4.png';

const getImageSeason = (episode) => {
    let season = episode.substring(0, 3);
    switch (season) {
        case "S01":
            return imgUno;
        case "S02":
            return imgDos;
        case "S03":
            return imgTres;
        case "S04":
            return imgCuatro;
        default:
            return imgUno;
    }
}

const EpisodeCard = ({ id, name, air_date, episode }) => {

    return <>
        <Link to={`/episode/${id}`}>
            <Card bg="success" text="white" className="mb-2">
                <Card.Img src={getImageSeason(episode)} alt="Card image" className={styles.i} />
                <Card.ImgOverlay>
                    <Card.Title>{episode}:{name}</Card.Title>
                    <Card.Text>
                        {air_date}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
    </>

}

export default EpisodeCard;
import React from 'react';
import styles from './Item.module.scss';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Item = ({title,image = "",alt,text,route}) => {

    return <div className={styles.container_item}>
        <h2>{title}</h2>
        <img src={image} alt={alt} className={styles.img_item} />
        <hr />
        <p>{text}</p>
        <Button className={styles.button} variant="outline-primary" as={NavLink} to={route}>Ver más</Button>  
    </div>
}

export default Item;
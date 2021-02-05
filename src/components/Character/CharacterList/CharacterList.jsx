import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterList.module.scss';

const CharacterList = ({items}) => {

    return (
        <div className="container">
          <h3>Lista de Personajes</h3>
          <div className={styles.grid}>
            {items.map(item => (
              <CharacterCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      );

}

export default CharacterList;
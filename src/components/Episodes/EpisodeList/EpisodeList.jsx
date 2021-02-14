import React from 'react';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import styles from '../../Character/CharacterList/CharacterList';

const EpisodeList = ({items}) => {
    return <>
      <div className="container">
        <div className={styles.grid}>
            {items.map((e) => {
                <EpisodeCard key={e.id} {...e} />
            })}
        </div>
      </div>
    
    </>

}
export default EpisodeList;
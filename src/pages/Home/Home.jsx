import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import styles from './Home.module.scss';
import Item from '../../components/Others/Item';
import imagenUno from '../../../assets/rick-y-morty.jpg';
import imagenDos from '../../../assets/dos.jpg';
import imagenTres from '../../../assets/tres.jpg';


const Home = () => {

    usePageTitle('Rick And Morty App');

    return <>
        <div className="position-reltive overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <h2>Rick And Morty App</h2>
            <hr />
            <p className={styles.ptext}>
                Esta es una pagina hecha como proyecto para el curso de giweb-react 2020,consumiendo la api de rick and Morty
            Se puede consultar màs información sobre la api en (<a className={styles.a_home} >https://rickandmortyapi.com</a>).
        </p>
        </div>

        <div className="position-reltive overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="row">
                <div class="row">
                    <div class="col-4">
                        <Item title="Personajes" alt="Personajes" image={imagenUno}
                            text=" La pagina provee información  basica sobre personajes de la serie, y los capitulos en los que salen."
                            route="/characters"
                        />
                    </div>
                    <div class="col-4">
                        <Item title="Episodios" alt="Personajes" image={imagenDos}
                            text=" La pagina provee información  los episodios de la serie."
                            route="/characters"
                        />
                    </div>
                    <div class="col-4">
                        <Item title="Lugares" alt="Personajes" image={imagenTres}
                            text=" La pagina provee información  basica sobre personajes de la serie, y los capitulos en los que salen."
                            route="/characters"
                        />
                    </div>
                </div>
            </div>
            </div>
            
        </>
    
}


export default Home;
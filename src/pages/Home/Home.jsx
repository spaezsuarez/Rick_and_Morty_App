import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';

const Home = () => {
    usePageTitle('Rick And Morty App');
    return <h1>Este es el home</h1>
}


export default Home;
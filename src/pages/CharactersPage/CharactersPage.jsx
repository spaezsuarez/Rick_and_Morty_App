import React from 'react';
import Characters from '../../containers/Characters';
import usePageTitle from '../../hooks/usePageTitle';

const CharactersPage = () => {
    usePageTitle('Personajes');
    return <Characters />
}

export default CharactersPage;
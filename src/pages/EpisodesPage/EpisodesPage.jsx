import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import Episodes from '../../containers/Episodes';

const EpisodesPage = () => {
    usePageTitle('Episodes');
    return <Episodes /> 
}

export default EpisodesPage;
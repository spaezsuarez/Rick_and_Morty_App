import React from 'react';
import { useParams } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle'; 
import LocationDetailContainer from '../../containers/LocationDetailContainer';

const LocationPageDetail = () => {

    const { id } = useParams();
    usePageTitle('Location detail');

    return <LocationDetailContainer id={id} />
}

export default LocationPageDetail
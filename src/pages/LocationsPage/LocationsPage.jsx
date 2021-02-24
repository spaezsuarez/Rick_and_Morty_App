import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import Locations from '../../containers/Locations.jsx';

const LocationsPage = () => {
    usePageTitle('Locations');
    return <Locations />
}

export default LocationsPage;
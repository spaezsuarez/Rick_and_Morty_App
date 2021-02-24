import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import LocationContainer from '../../containers/LocationContainer';

const LocationsPage = () => {
    usePageTitle('Locations');
    return <LocationContainer />
}

export default LocationsPage;
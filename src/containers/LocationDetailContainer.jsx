import React from 'react';
import useFetch from '../hooks/useFetch';
import { getLocation } from '../utils/Request';
import LocationDetail from '../components/Locations/LocationDetail/LocationDetail';
import Loading from '../components/Shared/Loading/Loading';

const LocationDetailContainer = ({ id }) => {
    const { data, loading, error } = useFetch(() => getLocation({id}), [id]);
    return (
        <>
          {loading ? (
            <Loading title="Cargando"/>
          ) : error ? (
            <p>Ha ocurrido un error ({error.message})</p>
          ) : (
              <>
               <LocationDetail {...data} />
              </>
              )
          }
        </>
      );
}

export default LocationDetailContainer;
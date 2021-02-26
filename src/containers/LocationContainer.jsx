import React, { useState } from "react";
//Funciones
import { getLocations } from "../utils/Request";
import useFormControl from '../hooks/useFormControl';
import useFetch from '../hooks/useFetch';
//Componentes
import ListGrid from '../components/Shared/ListGrid/ListGrid';
import LocationFilters from '../components/Locations/LocationFilters/LocationFilters';
import PaginationBar from '../components/Shared/PaginationBar/PaginationBar';
import LocationCard from '../components/Locations/LocationCard/LocationCard';
import Loading from '../components/Shared/Loading/Loading';
import Error from '../pages/Error/Error';


const LocationsContainer = () => {
    const [page, setPage] = useState(1);
    const [filters, handleChange, handleSubmit] = useFormControl({
        name:"",
        type:"",
        dimension:""
    });

    const { data, loading, error } = useFetch(() => getLocations({ page, ...filters }), [page]);

    const resetPage = () => {
        setPage(1);
    };

    return <>
      <br />
       <LocationFilters
        readOnly={loading}
        inputs={filters}
        onChange={handleChange}
        onSubmit={handleSubmit(resetPage)}
      />

        <PaginationBar
            readOnly={loading}
            current={page}
            max={!(loading || error) ? +data.info.pages : 1}
            onChangePage={setPage}/>

        {loading ? (
            <Loading title="Cargando"/>
      ) : error ? (
            <Error></Error>
      ) : (
            <>
              <ListGrid>
                {data.results.map(item => (
                  <LocationCard key={item.id} {...item} />
                ))}
              </ListGrid>

            </>
          )}
    
    </>;
}

export default LocationsContainer;
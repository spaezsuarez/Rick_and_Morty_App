import React , { UseState, useEffect } from 'react';

const Characters = () => {

    const [data,setData] = UseState(null);

    //data: VARIABLE DE ESTADO
    //setDtat: Funcion para modificar ese estado

    useEffect(() => {
        //Get data and setData
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setData(response)
            })
    }, [])


    return <h1>Get Characters</h1>

}

export default Characters;
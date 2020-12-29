//Custom hook para pedir datos
import { useState,useEffect } from 'react';

const useFetch = (fn,dependencias = []) => {
    const [state,setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    useEffect(() => {
        reFetch();
    },dependencias);

    const reFetch = () => {
        fn().then((resData) => {
            setState({
                data:resData,loading:false,error:null
            });
        }).catch((resError) => {
            setState({
                data:null,loading:false,error:resError
            });
        });
    }

    return {...state,reFetch};
 
}

export default useFetch;
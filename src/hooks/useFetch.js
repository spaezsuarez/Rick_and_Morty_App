//Custom hook para pedir datos
import { useState, useEffect } from 'react';

// Custom Hook para pedir datos
const useFetch = (fn, deps = []) => {
  const [isMounted, setIsMounted] = useState(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = () => {
    setIsMounted(true);
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fn()
      .then(data => {
        console.log(data);
        if (isMounted)
          setState({
            data,
            loading: false,
            error: null,
          });
      })
      .catch(error => {
        if (isMounted)
          setState({
            data: null,
            loading: false,
            error,
          });
      });
  };

  useEffect(() => {
    fetchData();
    return () => setIsMounted(false);
  }, deps);

  return { ...state, reFetch: fetchData };
}

export default useFetch;
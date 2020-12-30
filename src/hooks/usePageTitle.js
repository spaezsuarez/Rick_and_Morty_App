import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        //document.title = `Rick And Morty App ${title ? `| ${title}` : '' }`;
        document.title = title;
    },[]);
}

export default usePageTitle;
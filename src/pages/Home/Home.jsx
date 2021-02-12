import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';

const Home = () => {
    usePageTitle('Rick And Morty App');
    return <>
        <div className="position-reltive overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <h2>Rick And Morty app</h2>
        </div>

        <div className=" position-relative container-fluid p-3 p-md-5 m-md-3 text-center ">
            <div className="row">
                <div className="col-6">
                    Primera columna
                </div>
                <div className="col-6">
                    Segunda columna
                </div>
            </div>
        </div>
    </>
}


export default Home;
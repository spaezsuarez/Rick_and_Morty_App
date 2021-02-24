import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const LocationDetail = ({ id, name, type, dimension }) => {
    return <>
        <br />
        <div className="container-fluid">
            <Jumbotron>
            <div className="d-flex justify-content-center">
                <h1>{name}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <ul>
                    <li>type:{type}</li>
                    <li>dimension:{dimension}</li>
                </ul>
            </div>
            </Jumbotron>
        </div>
    </>
}

export default LocationDetail;
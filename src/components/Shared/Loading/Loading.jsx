import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({title}) => (
  <Container className="text-center mx-auto">
    <h5>{title}</h5>
    <Spinner animation="border" variant="primary" className="mx-auto">
    </Spinner>
  </Container>
);

export default Loading;
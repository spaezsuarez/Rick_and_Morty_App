import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from'./components/Header/Header';
import Characters from './containers/Characters';

const App = () => {
  return (
    <>
      <Header />
      <Characters />
      
    </>
  );
};

export default App;
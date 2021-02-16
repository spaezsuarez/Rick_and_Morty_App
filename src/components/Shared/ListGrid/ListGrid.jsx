import React from 'react';

import styles from './ListGrid.module.scss';

function ListGrid({ children }) {
    
  return<div className="position-reltive overflow-hidden p-3 p-md-5 m-md-3">
    <div className={`${styles.grid} py-3`}>{children}</div>;
  </div> 
  
}

export default ListGrid;
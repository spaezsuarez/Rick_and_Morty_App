import React from "react";
import errorStyles from './Error.module.scss';
import usePageTitle from '../../hooks/usePageTitle';

const Error = () => {
  usePageTitle('404 NOT FOUND');
  return (
    <section className={errorStyles.title}>
      <h2>404 NOT FOUND</h2>
    </section>
  );
};

export default Error;

import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className={styles.nFooter}>
        <a>Terminos de uso</a>
        <a>Declaracion de privacidad</a>
        <a>Centro de ayuda</a>
      </footer>
    </>
  );
};

export default Layout;

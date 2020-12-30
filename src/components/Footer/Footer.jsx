import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    return <footer className={styles.nFooter}>
    <a>Terminos de uso</a>
    <a>Declaracion de privacidad</a>
    <a>Centro de ayuda</a>
  </footer>
}

export default Footer;
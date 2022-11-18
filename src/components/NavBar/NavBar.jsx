import React from "react";
import styles from "./styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.containerNav}>
      <a className={styles.navEnlace} href="#">
        Inicio
      </a>
      <a className={styles.navEnlace} href="#">
        Peliculas
      </a>
      <a className={styles.navEnlace} href="#">
        Series
      </a>
      <a className={styles.navEnlace} href="#">
        Contacto
      </a>
    </nav>
  );
};

export default NavBar;

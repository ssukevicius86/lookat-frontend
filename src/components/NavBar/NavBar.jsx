import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/NavBar.module.scss";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.containerNav}>
      <a className={styles.navEnlace} href="#" onClick={() => navigate("/")}>
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

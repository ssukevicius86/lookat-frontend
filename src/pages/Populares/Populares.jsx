import React from "react";
import styles from "./styles/Populares.module.scss";

const Populares = () => {
  return (
    <div className={styles.populares}>
      <h1> Mas Populares</h1>
      <div className={styles.peli}></div>
      <div className={styles.peli}></div>
      <div className={styles.peli}></div>
    </div>
  );
};

export default Populares;

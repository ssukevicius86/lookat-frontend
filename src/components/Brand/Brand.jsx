import React from "react";
import styles from "./styles/Brand.module.scss";
import logo from "/imagenes/logo.png";

const Brand = () => {
  return (
    <div className={styles.brand}>
      <h1>LookAt</h1>
      {/* <figure className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </figure> */}
    </div>
  );
};

export default Brand;

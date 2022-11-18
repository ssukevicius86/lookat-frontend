import React from "react";
import styles from "./styles/Card.module.scss";

const Card = ({ title, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} title={title} />
    </div>
  );
};

export default Card;

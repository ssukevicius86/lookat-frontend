import React from "react";
import Card from "../Card/Card";
import styles from "./styles/Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;

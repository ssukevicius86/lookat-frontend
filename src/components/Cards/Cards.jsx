import React from "react";
import Card from "../Card/Card";
import styles from "./styles/Cards.module.scss";

const Cards = ({ title, movies }) => {
  return (
    <div className={styles.cards}>
      <h2>{title}</h2>
      {movies.slice(0, 9).map((movie) => (
        <Card movie={movie} />
      ))}
    </div>
  );
};

export default Cards;

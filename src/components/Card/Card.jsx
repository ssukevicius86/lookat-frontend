import React from "react";
import styles from "./styles/Card.module.scss";

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const Card = ({ movie }) => {
  return (
    <div className={styles.card} key={movie.id}>
      <img
        src={BASE_URL + movie.poster_path}
        alt={movie.title}
        title={movie.title}
      />
    </div>
  );
};

export default Card;

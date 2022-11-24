import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./styles/Cards.module.scss";

const Cards = ({ title, movies, url }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cards}>
      <h2 onClick={() => navigate(url)}>{title}</h2>

      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </div>
  );
};

export default Cards;

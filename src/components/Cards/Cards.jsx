import React from "react";
import Card from "../Card/Card";
import styles from "./styles/Cards.module.scss";

const Cards = ({ title }) => {
  return (
    <div className={styles.cards}>
      <h2>{title}</h2>
      <Card
        title="Pelicula"
        imgSrc="https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/12/22/5a3d936fcd676.jpeg"
      />
      <Card
        title="Pelicula"
        imgSrc="https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/12/22/5a3d936fcd676.jpeg"
      />
      <Card
        title="Pelicula"
        imgSrc="https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/12/22/5a3d936fcd676.jpeg"
      />
      <Card
        title="Pelicula"
        imgSrc="https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/12/22/5a3d936fcd676.jpeg"
      />
      <Card
        title="Pelicula"
        imgSrc="https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/12/22/5a3d936fcd676.jpeg"
      />
    </div>
  );
};

export default Cards;

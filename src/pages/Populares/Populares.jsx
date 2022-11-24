import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import { getPopular } from "../../services/movies/getPopular";
import styles from "./styles/Populares.module.scss";

const Populares = () => {
  const [populares, setPopulares] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const pelis = await getPopular();
    setPopulares(pelis);
  };
  return (
    <div className={styles.populares}>
      <h1> Mas Populares</h1>
      <Cards title={"Más Populares"} movies={populares} url="populares" />
    </div>
  );
};

export default Populares;

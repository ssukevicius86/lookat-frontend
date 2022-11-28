import React, { useEffect, useState } from "react";
import styles from "./styles/Clasicas.module.scss";
import { getTopRated } from "../../services/movies/getTopRated";
import Cards from "../../components/Cards/Cards";

const Clasicas = () => {
  const [clasicas, setClasicas] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const pelis = await getTopRated();
    setClasicas(pelis);
  };

  return (
    <div className={styles.clasicas}>
      <h1> Clasicas</h1>

      <aside>filtros</aside>
      <div className={styles.cardsClasicas}>
        <Cards title="" movies={clasicas} url="clasicas" />
      </div>
    </div>
  );
};

export default Clasicas;

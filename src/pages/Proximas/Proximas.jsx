import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./styles/Proximas.module.scss";
import { getUpcoming } from "../../services/movies/getUpcoming";

const Proximas = () => {
  const [proximas, setProximas] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const pelis = await getUpcoming();
    setProximas(pelis);
  };

  return (
    <div className={styles.proximas}>
      <h1> Proximas Peliculas</h1>

      <aside>filtros</aside>
      <div className={styles.cardsProximas}>
        <Cards title="" movies={proximas} url="proximas" />
      </div>
    </div>
  );
};

export default Proximas;

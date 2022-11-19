import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Slider from "../../components/Slider/Slider";
import { getPopular } from "../../services/movies/getPopular";
import styles from "./styles/Home.module.scss";

const Home = () => {
  const [populares, setPopulares] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const pelis = await getPopular();
    setPopulares(pelis);
    console.log(pelis);
  };

  return (
    <div className={styles.home}>
      <Slider />
      <Cards title={"Más Populares"} movies={populares} />
    </div>
  );
};

export default Home;

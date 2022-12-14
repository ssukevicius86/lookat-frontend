import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Slider from "../../components/Slider/Slider";
import { getPopular } from "../../services/movies/getPopular";
import { getUpcoming } from "../../services/movies/getUpcoming";
import { getTopRated } from "../../services/movies/getTopRated";

import styles from "./styles/Home.module.scss";

const Home = () => {
  const [populares, setPopulares] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [toprated, setToprated] = useState([]);

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getPopularMovies = async () => {
    const pelis = await getPopular();
    setPopulares(pelis);
    console.log(pelis);
  };

  const getUpcomingMovies = async () => {
    const pelis = await getUpcoming();
    setUpcoming(pelis);
    console.log(pelis);
  };

  const getTopRatedMovies = async () => {
    const pelis = await getTopRated();
    setToprated(pelis);
    console.log(pelis);
  };

  return (
    <div className={styles.home}>
      <Slider />
      <Cards title={"Más Populares"} movies={populares} url="populares" />
      <Cards title={"Proximas Peliculas"} movies={upcoming} url="proximas" />
      <Cards title={"Clasicas"} movies={toprated} url="clasicas" />
    </div>
  );
};

export default Home;

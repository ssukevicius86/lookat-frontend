import React from "react";
import Cards from "../../components/Cards/Cards";
import Slider from "../../components/Slider/Slider";
import styles from "./styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <Cards />
    </div>
  );
};

export default Home;

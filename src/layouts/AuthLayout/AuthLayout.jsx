import React from "react";
import { Outlet } from "react-router-dom";
import { Brand, NavBar, UserProfile } from "../../components";

import styles from "./styles/AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={styles.authlayout}>
      <header>
        <Brand />
        <div className={styles.headerRight}>
          <UserProfile />
          <NavBar />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> </footer>
    </div>
  );
};

export default AuthLayout;

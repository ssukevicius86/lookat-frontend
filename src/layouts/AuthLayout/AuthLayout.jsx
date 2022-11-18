import React from "react";
import { Brand, NavBar, UserProfile } from "../../components";

import styles from "./styles/AuthLayout.module.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authlayout}>
      <header>
        <Brand />
        <div className={styles.headerRight}>
          <UserProfile />
          <NavBar />
        </div>
      </header>
      <main>{children}</main>
      <footer> </footer>
    </div>
  );
};

export default AuthLayout;

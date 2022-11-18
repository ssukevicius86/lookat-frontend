import React from "react";
import styles from "./styles/UserProfile.module.scss";

const UserProfile = () => {
  return (
    <div className={styles.userprofile}>
      <div className={styles.avatar}>
        <img src="https://joeschmoe.io/api/v1/random" />
      </div>
    </div>
  );
};

export default UserProfile;

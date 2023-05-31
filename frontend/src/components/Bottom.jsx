import React from "react";
import styles from "./styles/Bottom.module.css";

const Bottom = ({ showDiv }) => {
  return (
    <div className={showDiv ? `${styles.Bottom}` : `${styles.none}`}>
      <p>
        <span>Make yourself at home!</span> Log in to keep your work safely
        stored to your account.
      </p>
      <div className={styles.profile}>
        <button>Play with Canva</button>
        <button className={styles.add}>Login</button>
      </div>
    </div>
  );
};

export default Bottom;

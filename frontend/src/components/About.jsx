import React from "react";
import styles from "./styles/Hero.module.css";

const About = () => {
  return (
    <div className={styles.About}>
      <h1>What will you design today?</h1>
      <h4>
        Canva makes it easy to create professional designs and to share or print
        them.
      </h4>
      <button>Sign up for free</button>
    </div>
  );
};

export default About;

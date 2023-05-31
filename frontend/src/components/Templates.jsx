import React from "react";
import styles from "./styles/Templates.module.css";
import second from "../assets/second.PNG";
import third from "../assets/third.PNG";
import fourth from "../assets/fourth.PNG";
import fifth from "../assets/fifth.PNG";
import sixth from "../assets/sixth.PNG";
import seven from "../assets/seven.PNG";
import eight from "../assets/eight.PNG";
import nine from "../assets/nine.PNG";
import ten from "../assets/ten.PNG";
import eleven from "../assets/eleven.PNG";
import twelve from "../assets/twelve.PNG";
import thirteen from "../assets/thirteen.PNG";
import fourteen from "../assets/fourteen.PNG";

const Templates = () => {
  return (
    <div className={styles.Templates}>
      <h2>Templates for absolutely anything</h2>
      <p>
        Customize an office template, or design something more personal, like an
        invitation.
      </p>
      <div className={styles.grid}>
        <div className={styles.one}>
          <img
            src="https://i.etsystatic.com/19585973/r/il/f1bc43/2550704767/il_1588xN.2550704767_6hll.jpg"
            alt=""
          />
        </div>
        <div className={styles.two}>
          <img src={second} alt="" />
        </div>
        <div className={styles.three}>
          <img src={third} alt="" />
        </div>
        <div className={styles.four}>
          <img src={fourth} alt="" />
        </div>
        <div className={styles.five}>
          <img src={fifth} alt="" />
        </div>
        <div className={styles.six}>
          <img src={sixth} alt="" />
        </div>
        <div className={styles.seven}>
          <img src={seven} alt="" />
        </div>
        <div className={styles.eight}>
          <img src={eight} alt="" />
        </div>
        <div className={styles.nine}>
          <img src={nine} alt="" />
        </div>
        <div className={styles.ten}>
          <img src={ten} alt="" />
        </div>
        <div className={styles.eleven}>
          <img src={eleven} alt="" />
        </div>
        <div className={styles.twelve}>
          <img src={twelve} alt="" />
        </div>
        <div className={styles.thirteen}>
          <img src={thirteen} alt="" />
        </div>
        <div className={styles.fourteen}>
          <img src={fourteen} alt="" />
        </div>
      </div>

      <button>Browse all templates</button>
    </div>
  );
};

export default Templates;

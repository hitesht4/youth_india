import React from "react";
import styles from "./styles/Menu.module.css";

const Menu = ({ openMenu }) => {
  return (
    <div className={openMenu ? `${styles.menu}` : `${styles.none}`}>
      <div>
        <ul>
          <span className={styles.headers}>Visual documents</span>
          <li>Visual Suite</li>
          <li>Docs</li>
          <li>Presentations</li>
          <li>Whiteboards</li>
          <li>PDF editor</li>
          <li>Graphs and charts</li>
        </ul>
      </div>
      <div>
        <ul>
          <span className={styles.headers}>Visual documents</span>
          <li>Visual Suite</li>
          <li>Docs</li>
          <li>Presentations</li>
          <li>Whiteboards</li>
          <li>PDF editor</li>
          <li>Graphs and charts</li>
        </ul>
      </div>
      <div>
        <ul>
          <span className={styles.headers}>Visual documents</span>
          <li>Visual Suite</li>
          <li>Docs</li>
          <li>Presentations</li>
          <li>Whiteboards</li>
          <li>PDF editor</li>
          <li>Graphs and charts</li>
        </ul>
      </div>
      <div>
        <ul>
          <span className={styles.headers}>Visual documents</span>
          <li>Visual Suite</li>
          <li>Docs</li>
          <li>Presentations</li>
          <li>Whiteboards</li>
          <li>PDF editor</li>
          <li>Graphs and charts</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span className={styles.headers}>Visual documents</span>
          </li>
          <li>Visual Suite</li>
          <li>Docs</li>
          <li>Presentations</li>
          <li>Whiteboards</li>
          <li>PDF editor</li>
          <li>Graphs and charts</li>
        </ul>
      </div>
      <div className={styles.flexer}>
        <div className={styles.Image}>
          <img
            src="https://s3.amazonaws.com/content-management-files.canva.com/c9022685-27e0-4f46-af78-d35a7ede1802.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>Browse Canva Templates</h4>
          <p>Reimagine the way you work</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

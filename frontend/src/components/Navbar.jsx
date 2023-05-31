import React from "react";
import { FiChevronDown } from "react-icons/fi";

import { BiSearch } from "react-icons/bi";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.image}>
          <img
            src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
            alt=""
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              Design Spotlight <FiChevronDown />
            </li>
            <li>
              Buisiness <FiChevronDown />
            </li>
            <li>
              Education <FiChevronDown />
            </li>
            <li>
              Plans And pricing <FiChevronDown />
            </li>
            <li>
              Learn <FiChevronDown />
            </li>
          </ul>
        </nav>
        <div className={styles.center}>
          <div className={styles.search_icon}>
            <BiSearch />
          </div>

          <input type="text" placeholder="Search your content or Canva's" />
        </div>
        <div className={styles.profile}>
          <button>Login</button>
          <button className={styles.add}>Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

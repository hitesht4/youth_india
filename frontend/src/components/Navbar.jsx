import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import styles from "./styles/Navbar.module.css";
import Sidebar from "./Sidebar";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.bars}>
          <Sidebar onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
        </div>
        <div className={styles.image}>
          <img
            src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
            alt=""
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
              Design Spotlight <FiChevronDown />
            </li>
            <li
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
              Buisiness <FiChevronDown />
            </li>
            <li
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
              Education <FiChevronDown />
            </li>
            <li
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
              Plans And pricing <FiChevronDown />
            </li>
            <li
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
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

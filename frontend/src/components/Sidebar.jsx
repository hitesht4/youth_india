import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import styles from "./styles/Navbar.module.css";

const Sidebar = ({ onOpen, onClose, isOpen }) => {
  const handleSidebar = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };
  return (
    <>
      <HiBars3
        onClick={handleSidebar}
        className={styles.bars}
        style={{ fontSize: "3rem" }}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            position={"relative"}
            top={"3rem"}
          ></DrawerHeader>
          <DrawerBody position={"relative"} top={"3rem"}>
            <ul className="browse">
              <li>Design Spotlight</li>
              <li>Buisiness</li>
              <li>Education</li>
              <li>Plans And pricing</li>
              <li>Learn</li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;

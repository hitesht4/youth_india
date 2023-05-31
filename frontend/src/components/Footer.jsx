import React from "react";
import styles from "./styles/Footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.accordion}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Features
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>Curved text generator</li>
                <li>Photo effects</li>
                <li>Image enhancer</li>
                <li>Add frames to photos</li>
                <li>Add text to photos</li>
                <li>Online video recorder</li>
                <li> Video trimmer</li>
                <li>Convert videos to MP4</li>
                <li>See more features</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Explore
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li className={styles.heading}></li>
                <li> Design ideas</li>
                <li>Custom prints</li>
                <li> Font pairing</li>
                <li> Colors</li>
                <li> Color wheel</li>
                <li> Color palette generator</li>
                <li>Blog</li>
                <li> Apps</li>
                <li> Template directory</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Community
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Online communities </li>
                <li>Creators</li>
                <li> Canva Represents Fund</li>
                <li> Developers</li>
                <li>Partnerships</li>
                <li> Affiliates program</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Download
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <li> iOS</li>
              <li> Android</li>
              <li> Windows</li>
              <li> Mac</li>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                  Company
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li className={styles.heading}></li>
                <li> About</li>
                <li>Newsroom</li>
                <li> Careers</li>
                <li> Sustainability</li>
                <li> Trust Center</li>
                <li>Security</li>
                <li>Terms and Privacy</li>
                <li> Contact Sales</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.footer_grid}>
        <div>
          <ul>
            <li className={styles.heading}>Features</li>
            <li>Curved text generator</li>
            <li>Photo effects</li>
            <li>Image enhancer</li>
            <li>Add frames to photos</li>
            <li>Add text to photos</li>
            <li>Online video recorder</li>
            <li> Video trimmer</li>
            <li>Convert videos to MP4</li>
            <li>See more features</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.heading}>Explore</li>
            <li> Design ideas</li>
            <li>Custom prints</li>
            <li> Font pairing</li>
            <li> Colors</li>
            <li> Color wheel</li>
            <li> Color palette generator</li>
            <li>Blog</li>
            <li> Apps</li>
            <li> Template directory</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.heading}>Community</li>
            <li> Online communities </li>
            <li>Creators</li>
            <li> Canva Represents Fund</li>
            <li> Developers</li>
            <li>Partnerships</li>
            <li> Affiliates program</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.heading}> Download</li>
            <li> iOS</li>
            <li> Android</li>
            <li> Windows</li>
            <li> Mac</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.heading}>Company </li>
            <li> About</li>
            <li>Newsroom</li>
            <li> Careers</li>
            <li> Sustainability</li>
            <li> Trust Center</li>
            <li>Security</li>
            <li>Terms and Privacy</li>
            <li> Contact Sales</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_flex}>
        <div>
          <select name="" id="">
            <option value="">English(US)</option>
          </select>
        </div>
        <div className={styles.exit}>
          <p>© 2023 All Rights Reserved, Canva®</p>
          <p>Privacy policy | Terms</p>
        </div>
        <div className={styles.footer_icons}>
          <FaFacebook />
          <AiFillTwitterCircle />
          <FaPinterest />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

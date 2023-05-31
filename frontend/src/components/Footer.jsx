import React from "react";
import styles from "./styles/Footer.module.css";
import { BsGlobe, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer}>
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
            <option value="">
              <BsGlobe />
              English(US)
            </option>
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

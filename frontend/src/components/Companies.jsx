import React from "react";
import styles from "./styles/Company.module.css";
import Marquee from "react-fast-marquee";

const company = [
  "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
  "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
  "https://static.canva.com/anon_home/logos/danone-grayscale.png",
  "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
  "https://static.canva.com/anon_home/logos/sony-music-monochrome.png",
  "https://static.canva.com/anon_home/logos/salesforce-grayscale.png",
  "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
  "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
  "https://static.canva.com/anon_home/logos/danone-grayscale.png",
  "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
  "https://static.canva.com/anon_home/logos/sony-music-monochrome.png",
  "https://static.canva.com/anon_home/logos/salesforce-grayscale.png",
  "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
  "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
  "https://static.canva.com/anon_home/logos/danone-grayscale.png",
  "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
  "https://static.canva.com/anon_home/logos/sony-music-monochrome.png",
  "https://static.canva.com/anon_home/logos/salesforce-grayscale.png",
];

const Companies = () => {
  return (
    <div className={styles.Companies}>
      <h2>Trusted by well known companies</h2>
      <Marquee
        style={{ display: "flex", gap: "200px", alignItems: "center" }}
        autoFill={true}
        pauseOnHover={true}
        pauseOnClick={true}
      >
        {company.map((item, index) => {
          return <img src={item} alt="" key={index} className={styles.comp} />;
        })}
      </Marquee>
    </div>
  );
};

export default Companies;

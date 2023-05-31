import React from "react";
import styles from "./styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.one}>
        <img
          src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=600/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
          alt=""
        />
      </div>
      <div className={styles.two}>
        <img
          src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=908/b3bbd63b-12e6-43de-abe6-d6652fb3deea/template-2.jpg"
          alt=""
        />
      </div>
      <div className={styles.three}>
        <img
          src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=612/673b652f-2614-43ff-8647-81ecbdb04678/template-3.jpg"
          alt=""
        />
      </div>
      <div className={styles.four}>
        <img
          src="https://content-management-files.canva.com/cdn-cgi/image/format=auto,w=680/35b5c343-4194-4ae8-90f1-7ec803d4600d/template-4.jpg"
          alt=""
        />
      </div>
      <div className={styles.vedio}>
        <video
          autoPlay={true}
          className={styles.file}
          draggable="false"
          loop={true}
          playsinline=""
          src="https://content-management-files.canva.com/943bd1b3-ffd6-4892-a4df-b107cb33e657/hero-banner-en-1600x852.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Hero;

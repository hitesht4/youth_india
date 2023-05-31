import React from "react";
import styles from "./styles/Company.module.css";
import One from "../assets/One.mp4";
import Two from "../assets/Two.mp4";

const Column = () => {
  return (
    <div className={styles.Column}>
      <div className={styles.grid_container}>
        <div className={styles.item}>
          <div className={styles.Image}>
            <video
              autoPlay={true}
              className={styles.file}
              draggable="false"
              loop={true}
              playsInline=""
              src={One}
            ></video>
          </div>
          <div className={styles.Text}>
            <h2>Ready-made designs</h2>
            <p>
              Benefit from thousands of professional templates, images, and
              quality content to choose from, for example when ordering new
              <span>business cards</span> or editing your next
              <span>video</span>.
            </p>
            <button>Create a design</button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.Image}>
            <video
              autoPlay
              className={styles.file}
              draggable="false"
              loop={true}
              src={Two}
            ></video>
          </div>
          <div className={styles.Text}>
            <h2>Built for teamwork</h2>
            <p>
              Invite people to edit with you or set your whole team up to manage
              brand assets, brainstorm on <span>whiteboards</span>, get
              approvals, and scale content with tools like <span>docs</span>.
            </p>
            <button>Work together</button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.Image}>
            <img
              src="https://static.canva.com/anon_home/benefits/benefits-share-en-1288x838.jpg"
              alt=""
            />
          </div>
          <div className={styles.Text}>
            <h2>Too good not to share</h2>
            <p>
              Whether you need to build a new <span>website</span> or print some
              <span>posters</span>, let your creations shine in the real world.
              Easily publish, download or share whatever you make in Canva. You
              can even have it printed and dropped straight at your door!
            </p>
            <button>Design your vision</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;

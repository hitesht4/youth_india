import React from "react";
import styles from "./styles/Features.module.css";
import { BsFolder, BsChatText } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import { SlPeople } from "react-icons/sl";

const data = [
  {
    dark: "Team folders ",
    text: "help you stay organized, store brand assets, and manage content",
    icon: <BsFolder />,
  },
  {
    dark: "Plan, create, schedule, and publish",
    text: "your social media posts directly from Canva",
    icon: <MdPhoneAndroid />,
  },
  {
    dark: "Real-time collaboration",
    text: "across countries, companies, and departments",
    icon: <SlPeople />,
  },
  {
    dark: "Built-in comments",
    text: "to communicate, keep content moving, and resolve suggestions in real-time",
    icon: <BsChatText />,
  },
];

const Features = () => {
  return (
    <div className={styles.Features}>
      <h2>Create your best work, together</h2>
      <p>
        Try Canva for Teams, the all-in-one solution for teams of all sizes to
        create and collaborate together.
      </p>
      <div className={styles.flex}>
        <div className={styles.flex_container}>
          {data.map((item, index) => {
            return (
              <div className={styles.ItemCard} key={index}>
                <div className={styles.Icon}>{item.icon}</div>
                <p>
                  <span>{item.dark}</span>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.Image}>
          <video
            autoPlay={true}
            className={styles.file}
            draggable="false"
            loop={true}
            playsInline=""
            src="https://static.canva.com/anon_home/teams-en-974x720.mp4"
          ></video>
        </div>
      </div>
      <button>Try Canva for Teams</button>
    </div>
  );
};

export default Features;

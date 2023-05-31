import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./styles/Slides.module.css";
import slide1 from "../assets/slide1.PNG";
import slide2 from "../assets/slide2.PNG";
import slide3 from "../assets/slide3.PNG";
import slide4 from "../assets/slide4.PNG";
import slide5 from "../assets/slide5.PNG";
import slide6 from "../assets/slide6.PNG";
import slide7 from "../assets/slide7.PNG";
import slide8 from "../assets/slide8.PNG";

const data = [
  {
    img: slide1,
    head: "Businesses love us",
    text: "See how teams of all sizes are using Canva to manage their workflows and create together.",
  },
  {
    img: slide2,
    head: "We make presenting easy",
    text: "Take the stress out of preparing and presenting with our go-to decks.",
  },
  {
    img: slide3,
    head: "We have a video editor",
    text: "Create and edit professional videos with easy animations, audio and more.",
  },
  {
    img: slide4,
    head: "We're free for classrooms",
    text: "Use Canva for in-person, remote or hybrid learning and teaching. Educators and students get their own free version of Canva.",
  },
  {
    img: slide5,
    head: "We print and deliver",
    text: "Choose a designer-made template, customize it, and we'll have it sustainably printed and delivered to your doorstep.",
  },
  {
    img: slide6,
    head: "We're sustainable",
    text: "Learn what we're doing about our carbon footprint, and how your Canva Print order makes the world a bit more breathable.",
  },
  {
    img: slide7,
    head: "We're free for nonprofits",
    text: "Nonprofits get their own free version of Canva, to keep doing great work in the world.",
  },
  {
    img: slide8,
    head: "We're diverse",
    text: "Learn how we're supporting and amplifying diverse creators and unique cultures in every corner of the globe.",
  },
];

const SliderComponent = () => {
  const responsive = {
    0: {
      items: 2,
    },
    650: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  const items = data.map((item) => (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.img} alt="" />
      </div>
      <div className={styles.text}>
        <p>{item.head}</p>
        <p>{item.text}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.Slides}>
      <h2>We're full of surprises</h2>
      <div className="card-container">
        Here are some of our best traits you might not know about
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        responsive={responsive}
        autoPlay={false}
        items={items}
        style={{ gap: "1rem" }}
      />
    </div>
  );
};

export default SliderComponent;

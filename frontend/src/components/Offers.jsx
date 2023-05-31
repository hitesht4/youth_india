import React from "react";
import styles from "./styles/Offer.module.css";

const offer = [
  {
    title: "Canva Free",
    text: "For anyone wanting to design anything, on your own or with others. No design experience required, and it's free forever.",
    btn: "Get Canva Free",
  },
  {
    title: "Canva Pro",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.91 4.91a1.91 1.91 0 0 1-1.044 1.701c.942 2.366 1.928 3.53 2.795 3.622.982.104 1.88-.323 2.76-1.377a.977.977 0 0 1 .072-.078 1.91 1.91 0 1 1 1.468.873l-1.423 5.42c-.297 1.13-1.363 1.922-2.586 1.922H8.066c-1.223 0-2.29-.792-2.586-1.922L4.063 9.675a1.91 1.91 0 1 1 1.46-.898c.03.028.059.06.086.093.837 1.048 1.727 1.471 2.748 1.363.908-.096 1.888-1.253 2.793-3.614a1.91 1.91 0 1 1 2.76-1.71ZM6.561 19.008h10.875c.518 0 .938.448.938 1s-.42 1-.938 1H6.563c-.517 0-.937-.448-.937-1s.42-1 .937-1Z"
        ></path>
      </svg>
    ),
    text: "For individuals wanting unlimited access to premium content, with special tools to grow your brand or passion project.",
    btn: "Start your free Pro trial",
  },
  {
    title: "Canva for Teams",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.91 4.91a1.91 1.91 0 0 1-1.044 1.701c.942 2.366 1.928 3.53 2.795 3.622.982.104 1.88-.323 2.76-1.377a.977.977 0 0 1 .072-.078 1.91 1.91 0 1 1 1.468.873l-1.423 5.42c-.297 1.13-1.363 1.922-2.586 1.922H8.066c-1.223 0-2.29-.792-2.586-1.922L4.063 9.675a1.91 1.91 0 1 1 1.46-.898c.03.028.059.06.086.093.837 1.048 1.727 1.471 2.748 1.363.908-.096 1.888-1.253 2.793-3.614a1.91 1.91 0 1 1 2.76-1.71ZM6.561 19.008h10.875c.518 0 .938.448.938 1s-.42 1-.938 1H6.563c-.517 0-.937-.448-.937-1s.42-1 .937-1Z"
        ></path>
      </svg>
    ),
    text: "For teams of all sizes wanting to create together, with premium workplace tools and approval flows.",
    btn: "Start your free Team's trial",
  },
];

const Offers = () => {
  return (
    <div className={styles.Offer}>
      <h2>A perfect fit for everyone</h2>
      <div className={styles.offer_grid}>
        {offer.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <h4>
                {item.icon}
                {item.title}
              </h4>
              <p>{item.text}</p>
              <button>{item.btn}</button>
            </div>
          );
        })}
      </div>

      <p>
        <span>Educational organizations</span>
        and can <span>nonprofits</span> enjoy premium Canva features for free
      </p>
    </div>
  );
};

export default Offers;

import React from "react";
import styles from "./styles/App.module.css";

export const App = () => {
  const {
    container,
    card,
    description,
    joinContainer,
    info,
    subscription,
    about,
    attribution,
  } = styles;
  return (
    <div className={container}>
      <main className={card}>
        <div className={joinContainer}>
          <h1>Join our community</h1>
          <p className={description}>
            30-day, hassle-free money back guarantee
          </p>
          <p>
            {" "}
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className={info}>
          <div className={subscription}>
            <h1>Monthly Subscription</h1>
            <div>
              <span>$29</span> per month
            </div>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className={about}>
            <h1>Why Us</h1>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li> Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <p className={attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/luispintodev/"
            target="_blank"
            rel="noreferrer"
          >
            Luís Pinto
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

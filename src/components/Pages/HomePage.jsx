import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/imgHomePage.png";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <h1> To Do List</h1>
      <img src={img} alt="Todo list image" />

      <Link to="/todos">
        <button>Let's do this</button>
      </Link>
    </div>
  );
};

export default HomePage;

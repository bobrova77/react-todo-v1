import { Link } from "react-router-dom";
import img from "../../assets/imgNotFoundPage.png";
import styles from "./NotFoundPage.module.css";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPageWrapper}>
      <img src={img} alt="Error 404" />
      <Link to="/" className={styles.backButton}>
        Back to Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;

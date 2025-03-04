// // import spinnerImg from "../../assets/spinnerImg.svg";
import styles from "./Spinner.module.css";
import React from "react";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.loader}></div>
      {/* <img src={spinnerImg} alt="Loading..." /> */}
    </div>
  );
};

export default Spinner;

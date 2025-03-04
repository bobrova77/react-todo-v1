import styles from "./Spinner.module.css";
import React from "react";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;

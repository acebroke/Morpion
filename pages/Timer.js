import React, { useState, useEffect } from "react";
import styles from "../styles/Timer.module.css";

function Timer({ reset, changePlayer, setcount, count, updateCount }) {


  useEffect(() => {
    const counter = setInterval(() => {
      updateCount((count) => {
        if (count > 0) {
          return count - 1;
        } else {
          changePlayer((val) => !val);
          return (count = 5);
        }
      });
    }, 1000);
    return () => clearInterval(counter);
  }, []);

  return <div className={styles.container}>Mon compteur : {count}</div>;
}

export default Timer;

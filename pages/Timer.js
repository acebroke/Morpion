import React, { useState, useEffect } from "react";
import styles from "../styles/Timer.module.css";

function Timer({ reset, changePlayer, setcount, count, updateCount }) {
  useEffect(() => {
    let { time, plays } = JSON.parse(localStorage.getItem("play"));
    const counter = setInterval(() => {
      updateCount((count) => {
        if (count > 0) {
          return count - 1;
        } else {
          changePlayer((val) => !val);
          return (count = time);
        }
      });
    }, 1000);
    return () => clearInterval(counter);
  }, []);

  return <div className={styles.timer}>Mon compteur : {count}
    
  </div>;
}

export default Timer;

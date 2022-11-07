import { useState, useEffect } from "react";
import styles from "../styles/Seetings.module.css";
import { useRouter } from "next/router";
function Settings() {
  const router = useRouter();

  const [time, setTime] = useState(3);
  const [plays, setPlays] = useState(1);

  function validPreferences() {
    let play = JSON.parse(localStorage.getItem("play"));
    play.time = time;
    play.plays = plays;
    localStorage.setItem("play", JSON.stringify(play));

    router.push("/MorpionGame");
  }

  return (
    <div className={styles.settings}>
      <h4 className={styles.title}>Settings</h4>
      <div>
        <p className={styles.text}>Time to play ?</p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setTime(3);
            }}
            className={`${styles.button} ${
              time == 3 ? styles.active : styles.inactive
            }`}
          >
            3 sec
          </button>
          <button
            onClick={() => {
              setTime(5);
            }}
            className={`${styles.button} ${
              time == 5 ? styles.active : styles.inactive
            }`}
          >
            5 sec
          </button>
          <button
            onClick={() => {
              setTime(10);
            }}
            className={`${styles.button} ${
              time == 10 ? styles.active : styles.inactive
            }`}
          >
            10 sec
          </button>
        </div>
      </div>
      <div>
        <p className={styles.text}>Best of ?</p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setPlays(1);
            }}
            className={`${styles.button} ${
              plays == 1 ? styles.active : styles.inactive
            }`}
          >
            1
          </button>
          <button
            onClick={() => {
              setPlays(3);
            }}
            className={`${styles.button} ${
              plays == 3 ? styles.active : styles.inactive
            }`}
          >
            3
          </button>
          <button
            onClick={() => {
              setPlays(5);
            }}
            className={`${styles.button} ${
              plays == 5 ? styles.active : styles.inactive
            }`}
          >
            5
          </button>
        </div>
      </div>
      <button onClick={validPreferences} className={styles.buttonSubmit}>
        Let's go !
      </button>
    </div>
  );
}

export default Settings;

import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

function HomePage() {
  const [pseudo, setPseudo] = useState("");
  const [writePseduo, setwritePseduo] = useState(false);
  const [versus, setversus] = useState("player");
  const router = useRouter();

  function submit() {
    // First Pseudo
    if (!writePseduo) {
      setwritePseduo(true);
      return;
    }

    if (!writePseduo) {
      setversusPlayer2(true);
      return;
    }

    router.push("/MorpionGame");
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxCentral}>
        <h1>Morpion Game</h1>
        <button className={styles.buttone} onClick={submit}>
          Let's Play
        </button>
        {writePseduo && (
          <>
            <input
              className={styles.input}
              placeholder="Pseudo Player 1"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />

            <div className={styles.box}>
              <button
                onClick={() => {
                  setversus("player");
                }}
                className={` ${styles.button} ${
                  versus === "player" ? styles.active : styles.inactive
                }`}
              >
                PLAYER 2
              </button>
              <button
                onClick={() => {
                  setversus("ia");
                }}
                className={` ${styles.button} ${
                  versus === "ia" ? styles.active : styles.inactive
                }`}
              >
                IA
              </button>
              <button
                onClick={() => {
                  setversus("ligne");
                }}
                className={` ${styles.button} ${
                  versus === "ligne" ? styles.active : styles.inactive
                }`}
              >
                EN LIGNE
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;

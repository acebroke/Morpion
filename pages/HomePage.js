import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

function HomePage() {
  const [pseudo1, setPseudo1] = useState("");
  const [pseudo2, setPseudo2] = useState("");
  const [writePseduo, setwritePseduo] = useState(false);
  const [versus, setversus] = useState("player");
  const router = useRouter();

  function submit() {
    // First Pseudo1
    if (!writePseduo) {
      setwritePseduo(true);
      return;
    }

    // Check if player1 1 player2 are write pseudo
    if (versus === "player") {
      if (!pseudo1.trim() || !pseudo2.trim()) {
        return;
      } else {
        localStorage.setItem(
          "pseudos",
          JSON.stringify({
            pseudo1: pseudo1,
            pseudo2: pseudo2,
          })
        );
        router.push({
          pathname: "/MorpionGame",
          query: { pseudo1, pseudo2 },
        });
      }
    }

    // check for other play if pseudo1 is written
    if (versus === "ia" || versus === "ligne") {
      if (!pseudo1.trim()) {
        return;
      }
    }
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
              value={pseudo1}
              onChange={(e) => setPseudo1(e.target.value)}
            />

            {versus === "player" && (
              <input
                className={styles.input}
                placeholder="Pseudo Player 2"
                value={pseudo2}
                onChange={(e) => setPseudo2(e.target.value)}
              />
            )}

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

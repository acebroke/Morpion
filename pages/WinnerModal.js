import { useState, useEffect } from "react";
import styles from "../styles/WinnerModal.module.css";

function WinnerModal({ resetGame, victory }) {
  const [winner, setWinner] = useState(false);


  useEffect(() => {}, []);

  function checkFinalVictory(playerScore1, playerScore2, maxPlay) {}

  return (
    <div className={styles.backgroundModal}>
      <div className={styles.winnerModal}>
        <h3>Résultat</h3>
        <p className={styles.score}>
          <span className={styles.pseudo}>John</span> 1 - 0
          <span className={styles.pseudo}>Tony</span>
        </p>
        <button className={styles.button} onClick={resetGame}>
          continue
        </button>
      </div>
    </div>
  );
}

export default WinnerModal;

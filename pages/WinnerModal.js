import React from "react";
import styles from "../styles/WinnerModal.module.css";

function WinnerModal({ name, type, resetGame }) {
  return (
    <div className={styles.backgroundModal}>
      <div className={styles.winnerModal}>
        <h3>Winner Modal</h3>
        <button onClick={resetGame}>resetGame</button>
      </div>
    </div>
  );
}

export default WinnerModal;

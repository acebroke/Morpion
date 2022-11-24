import { useState, useEffect } from "react";
import styles from "../styles/WinnerModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FiRefreshCw, FiHome } from "react-icons/fi";
import { useRouter } from "next/router";
import { restartGamePlayer2 } from "../reducers/game";
function WinnerModal({ resetGame, victory }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [winner, setWinner] = useState(false);

  const { pseudo1, pseudo2, time, plays } = useSelector(
    (state) => state.game.value
  );

  useEffect(() => {
    if (checkFinalVictory(pseudo1, pseudo2, plays)) {
      setWinner(true);
    }
  }, []);

  function checkFinalVictory(playerScore1, playerScore2, maxPlay) {
    let result = false;

    if (playerScore1.score === maxPlay || playerScore2.score === maxPlay) {
      result = true;
    }

    return result;
  }

  let responseResult;

  if (!winner) {
    responseResult = (
      <button className={styles.button} onClick={resetGame}>
        continue
      </button>
    );
  } else {
    responseResult = (
      <div className={styles.winnerIsIt}>
        <h3>
          The winner is {victory == "circle" ? pseudo1.name : pseudo2.name} !
        </h3>
        <div className={styles.winnerChoice}>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(restartGamePlayer2());
              resetGame();
            }}
          >
            Restart <FiRefreshCw />{" "}
          </button>
          <button
            className={styles.button}
            onClick={() => {
              router.push("/");
              // dispatch(cleanGamePlayer2())
            }}
          >
            Go Home <FiHome />{" "}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.backgroundModal}>
      <div className={styles.winnerModal}>
        <h3>Résultat</h3>
        <p className={styles.score}>
          <span className={styles.pseudo}>{pseudo1.name}</span> {pseudo1.score}{" "}
          - {pseudo2.score}
          <span className={styles.pseudo}>{pseudo2.name}</span>
        </p>
        {responseResult}
      </div>
    </div>
  );
}

export default WinnerModal;

import { useState, useEffect } from "react";
import styles from "../styles/MorpionGame.module.css";
import Cellule from "./Cellule";
import { useRouter } from "next/router";
import Timer from "./Timer";
import WinnerModal from "./WinnerModal";
import { useSelector, useDispatch } from "react-redux";
import { updateScoreGame } from "../reducers/game";
function MorpionGame() {
  const { pseudo1, pseudo2, time, plays, type } = useSelector(
    (state) => state.game.value
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const [game, setGame] = useState(Array(9).fill(""));
  const [isPlay, setisPlay] = useState(true);
  const [winner, setwinner] = useState(null);
  const [hoverPlay, sethoverPlay] = useState(null);
  const [count, setcount] = useState(time);

  function resetGame() {
    setwinner(null);
    setisPlay(true);
    setGame(Array(9).fill(""));
  }

  function play(value, id) {
    if (value) return;

    // play
    let tab;
    setGame(() => {
      tab = [...game];
      tab[id] = isPlay ? "circle" : "cross";
      return tab;
    });

    // Change the player
    setisPlay(!(type == "ia") ? !isPlay : false);
    // reset count after click
    setcount(time);

    if (type == "ia") {
      setTimeout(() => {
        iaEasy(tab);
      }, 1500);
    }
  }

  function iaEasy(arr) {
    let indexes = Array.from(Array(arr.length).keys());
    let availableIndexes = indexes.filter((index) => arr[index] == "");
    let selectedIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    setGame(() => {
      let tab = [...arr];
      tab[selectedIndex] = "cross";
      return tab;
    });
    // Change the player
    setisPlay(true);
    // reset count after click
    setcount(time);
  }

  useEffect(() => {
    checkWinner(game);
  }, [isPlay]);

  function checkWinner(tab) {
    let result;
    let solutions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    solutions.forEach((element, i) => {
      let check = tab.filter((val, i) => {
        return element.indexOf(i) !== -1;
      });

      if (
        check.every((el) => el === "circle") ||
        check.every((el) => el === "cross")
      ) {
        result = check[0];
        dispatch(updateScoreGame(result));
        setwinner(result);
      }
    });
    return result;
  }

  function hover(value, id, event) {
    if (event === "hover" && !game[id]) {
      sethoverPlay(id);
    } else {
      sethoverPlay(null);
    }
  }

  const compoCellules = game.map((e, i) => {
    let resultHover = i === hoverPlay;
    return (
      <Cellule
        key={i}
        value={e}
        id={i}
        play={play}
        hoverPlay={resultHover}
        hover={hover}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.game}>{compoCellules}</div>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${
            isPlay ? styles.active : styles.inactive
          }`}
        >
          {pseudo1.name}
        </button>
        <p>
          {pseudo1.score}-{pseudo2.score}
        </p>
        <button
          className={`${styles.button} ${
            isPlay ? styles.inactive : styles.active
          }`}
        >
          {pseudo2.name}
        </button>
      </div>
      {!winner ? (
        <Timer changePlayer={setisPlay} count={count} updateCount={setcount} />
      ) : (
        <WinnerModal resetGame={resetGame} victory={winner} />
      )}
    </div>
  );
}

export default MorpionGame;

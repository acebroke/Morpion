import { useState, useEffect } from "react";
import styles from "../styles/MorpionGame.module.css";
import Cellule from "./Cellule";
import { useRouter } from "next/router";
function MorpionGame() {
  const [game, setGame] = useState(Array(9).fill(""));
  const [isPlay, setisPlay] = useState(true);
  const [winner, setwinner] = useState(null);
  const [hoverPlay, sethoverPlay] = useState(null);
  const router = useRouter();
  const [pseudo1, setPseudo1] = useState(router.query.pseudo1);
  const [pseudo2, setPseudo2] = useState(router.query.pseudo2);

  useEffect(() => {
    let pseudos = JSON?.parse(localStorage?.getItem("pseudos"));

    if (!pseudos) {
      router.push("/");
      return;
    }

    setPseudo1(pseudos.pseudo1);
    setPseudo2(pseudos.pseudo2);
  }, []);

  //   if win
  if (winner) {
    alert("The winner is :" + winner);
    resetGame();
  }

  function resetGame() {
    setwinner(null);
    setisPlay(true);
    setGame(Array(9).fill(""));
  }

  function play(value, id) {
    // Check if can play
    if (value) return;

    // play
    setGame(() => {
      let tab = [...game];
      tab[id] = isPlay ? "circle" : "cross";

      return tab;
    });

    // Change the player
    setisPlay(!isPlay);
  }

  useEffect(() => checkWinner(game), [isPlay]);

  function checkWinner(tab) {
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
        setwinner(check[0]);
      }
    });
  }

  function hover(value, id, event) {
    // console.log("game[value] =>", game[id]);
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
          {pseudo1}
        </button>
        <button
          className={`${styles.button} ${
            isPlay ? styles.inactive : styles.active
          }`}
        >
          {pseudo2}
        </button>
      </div>
    </div>
  );
}

export default MorpionGame;

import React from "react";
import styles from "../styles/Cellule.module.css";
import { ImCross } from "react-icons/im";
import { MdOutlineCircle } from "react-icons/md";
import { BiCrosshair } from "react-icons/bi";

function Cellule({ value, play, id, hover, hoverPlay }) {
  const jeton =
    value == "circle" ? (
      <MdOutlineCircle size={"80%"} color={"rgb(145, 66, 66)"} />
    ) : value == "cross" ? (
      <ImCross size={"70%"} color={"rgb(145, 66, 66)"} />
    ) : (
      ""
    );

  return (
    <div
      onMouseOver={() => {
        hover(value, id, "hover");
      }}
      onMouseLeave={() => {
        hover(value, id, "leave");
      }}
      onClick={() => play(value, id)}
      className={`${styles.cellule} ${
        !hoverPlay ? styles.hoverInActive : styles.hoverActive
      }`}
    >
      {jeton}
    </div>
  );
}

export default Cellule;

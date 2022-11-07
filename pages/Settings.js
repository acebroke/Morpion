import { useState, useEffect } from "react";
import styles from "../styles/Seetings.module.css";

function Settings() {
  return (
    <div className={styles.settings}>
      <div>
        {/* Times 3sec 5sec 10sec */}
        <button>3 sec</button>
        <button>5 sec</button>
        <button>10 sec</button>
      </div>
      <div>
        {/* Nombre de parties 1x 3x 5x */}
        <button>1</button>
        <button>3</button>
        <button>5</button>
      </div>
    </div>
  );
}

export default Settings;

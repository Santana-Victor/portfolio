import styles from "./styles.module.css";

import Gamepad from "../../assets/icons/gamepad-solid.svg";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Gamepad} alt={"Icone gamepad"} />
      <span className={styles.text}>VS</span>
    </div>
  );
}

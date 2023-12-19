import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.link} to={"/portfolio"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"/projects"}>
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

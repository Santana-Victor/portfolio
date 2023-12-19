import styles from "./styles.module.css";

import SocialLinks from "../SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <SocialLinks />
        <span className={styles.copy}>
          © 2023 - Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

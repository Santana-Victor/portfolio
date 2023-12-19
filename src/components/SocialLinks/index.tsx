import styles from "./styles.module.css";

import IconGitHub from "../components_icons/IconGithub";
import IconLinkedin from "../components_icons/IconLinkedin";

export default function SocialLinks() {
  return (
    <nav>
      <ul className={styles.social_links}>
        <li>
          <a
            href={"https://github.com/santana-victor"}
            aria-label={"Link para o meu perfil no Github"}
            target={"_blank"}
          >
            <IconGitHub isSmall={false} />
          </a>
        </li>
        <li>
          <a
            href={"https://www.linkedin.com/in/victor-santana-9821a0236/"}
            aria-label={"Link para o meu perfil no Linkedin"}
            target={"_blank"}
          >
            <IconLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
}

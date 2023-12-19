import styles from "./styles.module.css";

import Title from "../typography/Title";
import Bold from "../typography/Bold";
import Subtitle from "../typography/Subtitle";
import SocialLinks from "../SocialLinks";

export default function MyIntroduction() {
  return (
    <div className={styles.container_bg_color}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Title>
            Olá, eu sou <Bold isName={true}>Victor Santana</Bold>
          </Title>
          <Subtitle isColorWhite={true}>Desenvolvedor Front-end</Subtitle>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

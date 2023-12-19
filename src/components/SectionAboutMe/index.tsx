import styles from "./styles.module.css";

import Subtitle from "../typography/Subtitle";
import About from "../About";

export default function SectionAboutMe() {
  return (
    <section className={styles.section_about_me}>
      <Subtitle isColorWhite={false}>Sobre mim</Subtitle>
      <About isAboutProject={false}>
        Sou entusiasta de tecnologia e apaixonado por jogos, com o tempo uma
        dúvida surgiu em minha mente "como os jogos são feitos?", anos mais
        tarde com o acesso à internet percebi como a área da programção é vasta,
        surgiu o interesse sobre desenvolvimento web desde então venho estudando
        e pesquisando maneiras de aprimorar meus conhecimentos e habilidades
        técnicas com o objetivo de ingressar na área.
      </About>
    </section>
  );
}

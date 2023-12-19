import styles from "./styles.module.css";

import Subtitle from "../typography/Subtitle";
import ContainerIconsTech from "../ContainerIconsTech";

export default function SectionSkills() {
  return (
    <section className={styles.section_skills}>
      <Subtitle isColorWhite={true}>Habilidades</Subtitle>
      <ContainerIconsTech />
    </section>
  );
}

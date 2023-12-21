import styles from "./styles.module.css";

import ContainerProject from "../ContainerProject";

import listProjects from "../../informations/listProjects";

export default function SectionProjects() {
  return (
    <section className={styles.section_projects}>
      {listProjects.map((project) => (
        <ContainerProject project={project} key={project.id} />
      ))}
    </section>
  );
}

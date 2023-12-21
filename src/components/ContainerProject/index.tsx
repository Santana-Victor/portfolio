import styles from "./styles.module.css";

import ProjectTitle from "../typography/ProjectTitle";
import ProjectInfos from "../ProjectInfos";

import ProjectProps from "../../types/ProjectProps";

import useMouseEventToggle from "../../hooks/useMouseEventToggle";

type ContainerProjectProps = {
  project: ProjectProps;
};

export default function ContainerProject({ project }: ContainerProjectProps) {
  const { mouseEventToggle, handleMouseEnter, handleMouseLeave } =
    useMouseEventToggle();

  return (
    <div className={styles.container} onMouseEnter={handleMouseEnter}>
      <img src={project.image} alt={project.alt} className={styles.image} />
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectInfos
        mouseEvent={mouseEventToggle}
        handleMouseEvent={handleMouseLeave}
        project={project}
      />
    </div>
  );
}

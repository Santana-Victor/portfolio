import { MouseEventHandler } from "react";

import styles from "./styles.module.css";

import About from "../About";
import ButtonProject from "../ButtonProject";
import ButtonRepo from "../ButtonRepo";

import ProjectTitle from "../typography/ProjectTitle";

import ProjectProps from "../../types/ProjectProps";

type ProjectInfosProps = {
  mouseEvent: boolean;
  handleMouseEvent: MouseEventHandler<HTMLDivElement>;
  project: ProjectProps;
};

export default function ProjectInfos({
  mouseEvent,
  handleMouseEvent,
  project,
}: ProjectInfosProps) {
  const { title, about, stack, linkProject, linkGitHub } = project;

  return (
    <div
      className={
        mouseEvent ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`
      }
      onMouseLeave={handleMouseEvent}
    >
      <ProjectTitle>{title}</ProjectTitle>
      <About isAboutProject={true}>{about}</About>
      <div className={styles.techs}>
        {stack.length > 0 && stack.map((tech) => <span>{tech}</span>)}
      </div>
      <div className={styles.buttons}>
        <ButtonProject link={linkProject}>Projeto</ButtonProject>
        <ButtonRepo link={linkGitHub}>Repositório</ButtonRepo>
      </div>
    </div>
  );
}

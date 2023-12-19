import styles from "./styles.module.css";

import RenderIconTech from "../RenderIconTech";

import listIconsTech from "../../informations/listIconsTech";

export default function ContainerIconsTech() {
  return (
    <ul className={styles.container_icons_tech}>
      {listIconsTech.map((tech) => (
        <li className={styles.icon_tech} key={tech.id}>
          <RenderIconTech image={tech.image} name={tech.name} />
          <span className={styles.name}>{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}

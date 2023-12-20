import styles from "./styles.module.css";

export default function ProjectTitle({ children }: { children: string }) {
  return <h3 className={styles.project_title}>{children}</h3>;
}

import styles from "./styles.module.css";

type AboutProps = {
  children: React.ReactNode;
  isAboutProject: boolean;
};

export default function About({ children, isAboutProject }: AboutProps) {
  return (
    <p
      className={
        isAboutProject ? `${styles.about} ${styles.project}` : `${styles.about}`
      }
    >
      {children}
    </p>
  );
}

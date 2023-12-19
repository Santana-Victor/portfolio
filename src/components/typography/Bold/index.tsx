import styles from "./styles.module.css";

type BoldProps = {
  children: string;
  isName: boolean;
};

export default function Bold({ children, isName }: BoldProps) {
  return (
    <span
      className={isName ? `${styles.bold} ${styles.name}` : `${styles.bold}`}
    >
      {children}
    </span>
  );
}

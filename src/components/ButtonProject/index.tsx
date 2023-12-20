import styles from "./styles.module.css";

type ButtonProjectProps = {
  link: string;
  children: string;
};

export default function ButtonProject({ link, children }: ButtonProjectProps) {
  return (
    <button className={styles.button}>
      <a
        href={link}
        className={styles.link}
        aria-label={"Link para o projeto online"}
        target={"_blank"}
      >
        {children}
      </a>
    </button>
  );
}

import styles from "./styles.module.css";

type ButtonProjectProps = {
  link: string;
  children: string;
};

export default function ButtonRepo({ link, children }: ButtonProjectProps) {
  return (
    <button className={styles.button}>
      <a
        href={link}
        className={styles.link}
        aria-label={"Link para o repositório do projeto no Github"}
        target={"_blank"}
      >
        {children}
      </a>
    </button>
  );
}

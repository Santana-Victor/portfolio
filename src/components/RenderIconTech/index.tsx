import styles from "./styles.module.css";

type IconTechProps = {
  image: string;
  title: string;
};

export default function IconTech({ image, title }: IconTechProps) {
  return <img className={styles.image} src={image} alt={`Ícone ${title}`} />;
}

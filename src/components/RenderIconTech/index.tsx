import styles from "./styles.module.css";

type IconTechProps = {
  image: string;
  name: string;
};

export default function IconTech({ image, name }: IconTechProps) {
  return <img className={styles.image} src={image} alt={`Ícone ${name}`} />;
}

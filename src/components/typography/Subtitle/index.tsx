import styles from "./styles.module.css";

type SubtitleProps = {
  children: string;
  isColorWhite: boolean;
};

export default function Subtitle({ children, isColorWhite }: SubtitleProps) {
  return (
    <h2
      className={
        isColorWhite
          ? `${styles.subtitle} ${styles.color_white}`
          : `${styles.subtitle}`
      }
    >
      {children}
    </h2>
  );
}

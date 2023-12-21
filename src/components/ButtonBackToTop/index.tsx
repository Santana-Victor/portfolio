import styles from "./styles.module.css";

import IconArrowUp from "../components_icons/IconArrowUp";

import useBackToTop from "../../hooks/useBackToTop";

export default function ButtonBackToTop() {
  const { backToTop, scrollUp } = useBackToTop({ initialValue: false });

  return (
    <>
      {backToTop && (
        <button
          className={styles.button}
          aria-label={"Botão para voltar ao topo da página"}
          onClick={scrollUp}
        >
          <IconArrowUp />
        </button>
      )}
    </>
  );
}

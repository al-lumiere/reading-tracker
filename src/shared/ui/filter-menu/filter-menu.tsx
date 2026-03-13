import type { FC } from "react";
import styles from "./filter-menu.module.css";
import type { FilterMenuUIProps } from "./types";

export const FilterMenuUI: FC<FilterMenuUIProps> = ({
  text,
  quality,
  onClick,
}) => (
  <button type="button" className={styles.container} onClick={onClick}>
    <span className={styles.text}>{text}</span>
    {quality && <span className={styles.quality}>{quality}</span>}
  </button>
);

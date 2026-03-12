import type { FC } from "react";
import type { LogoUIProps } from "./types";
import styles from "./logo.module.css";

export const LogoUI: FC<LogoUIProps> = ({ onClick }) => (
  <div className={styles.logo} onClick={onClick}>
    <span className={styles.text}>My Library</span>
  </div>
);

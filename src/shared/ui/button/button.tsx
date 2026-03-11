import type { FC } from 'react';
import styles from './button.module.css';
import type { ButtonUIProps } from './types';

export const ButtonUI: FC<ButtonUIProps> = ({ text, onClick }) => (
  <button type="button" className={styles.container} onClick={onClick}>
    <span className={styles.text}>{text}</span>
  </button>
);
